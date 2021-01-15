import React from "react";
import axios from "axios";
import store from "store";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { backendUrl } from '../../config/config';

import { storeContext, ACTIONS } from "../../context/providerContext";
import Spinner from "../Spinner/index";
import Modal from "../UI/Modal/Modal";

import "./order.scss";
import "../../page/MobileOrder/mobileorder.scss";

//icon
import cake from "../../assets/components/Wrapper/RightMenu/cake.png";
import minus from "../../assets/components/ConstructorSlider/minus.svg";
import plus from "../../assets/components/ConstructorSlider/plus.svg";

class Order extends React.Component {
  static contextType = storeContext;

  state = {
    form: {
      name: "",
      phone: "",
      address: "",
      flat: "",
      entrance: "",
      floor: "",
      intercom: "",
      comment: "",
    },
    payType: "cash",
    beskontaktnaya: false,
    tools: true,
    toolsCount: 0,
    bonusVisible: false,
    bonusSum: 0,
    agree: false,
    error: null,
    loading: false,
    modalOpened: false,
    token: store.get("24rolls") ? (store.get("24rolls").user ? store.get("24rolls").user.token : null) : null,
  };

  onSelectChange = (event) => {
    this.setState((prevState) => ({
      payType: event.target.value,
      beskontaktnaya:
        event.target.value === "cash" ? false : prevState.beskontaktnaya,
    }));
  };

  onBonusChange = (event) => {
    this.setState({
      bonusSum: event.target.value,
    });
  };

  onInputChangeHandler = (event, id) => {
    const updatedForm = {
      ...this.state.form,
    };
    updatedForm[id] = event.target.value;
    this.setState({ form: updatedForm });
  };

  onOrderSubmit = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const { state, dispatch } = this.context;
    const { t } = this.props;
    let bonus = 0;

    const items = state.cart.basket.map((el) => ({
      offer: {
        name: el.name,
        displayName: el.name,
        externalId: el.externalId,
      },
      quantity: el.countBasket,
      initialPrice: el.price,
    }));
    const token = store.get("24rolls").user
      ? store.get("24rolls").user.token
      : null;

    // basket is exist
    if (!state.cart.basket[0]) {
      this.setState({
        error: t("order.orderOffer.errorBasket"),
        loading: false,
      });
    }
    // user not authorized
    else if (!token) {
      axios
        .post(backendUrl + "/order/notAuth", {
          oplata: this.state.payType,
          delivery: "courier",
          city: store.get("24rolls").customOptions.city,
          address: this.state.form.address,
          name: this.state.form.name,
          phone: this.state.form.phone,
          items: items,
        })
        .then((res) => {
          console.log(res, res.data);
          this.setState({
            form: {
              name: "",
              phone: "",
              address: "",
              flat: "",
              entrance: "",
              floor: "",
              intercom: "",
              comment: "",
            },
            payType: "cash",
            beskontaktnaya: false,
            tools: true,
            toolsCount: 0,
            bonusVisible: false,
            bonusSum: 0,
            agree: false,
            error: null,
            loading: false,
            modalOpened: true,
            token: store.get("24rolls").user
              ? store.get("24rolls").user.token
              : null,
          });
          dispatch({ type: ACTIONS.CLEAN_BASKET });
        })
        .catch((err) => {
          console.log(err, err.response);
        })
        .finally(() => this.setState({ loading: false }));
    }
    // user authorized
    else if (token) {
      if (this.state.bonusVisible === true && this.state.bonusSum !== 0) {
        axios
          .get(backendUrl + "/user/bonus", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            console.log(this.state.bonusSum);
            if (res.data.bonus >= this.state.bonusSum) {
              bonus = this.state.bonusSum;
              console.log(bonus, this.state.bonusSum, res.data.bonus);
              return bonus;
            } else {
              this.setState({
                loading: false,
                error: t("order.orderOffer.errorBonuses"),
              });
              return 0;
            };
          })
          .then(bonus => {
            console.log(bonus);
            axios
              .post(
                backendUrl + "/order",
                {
                  oplata: this.state.payType,
                  delivery: "courier",
                  city: store.get("24rolls").customOptions.city,
                  address: this.state.form.address,
                  name: this.state.form.name,
                  phone: this.state.form.phone,
                  bonusSum: bonus,
                  items: items,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res, res.data);
                if (bonus) {
                  dispatch({
                    type: ACTIONS.SET_BONUS_AMOUNT,
                    bonus: state.bonus - bonus,
                  });
                }
                dispatch({ type: ACTIONS.CLEAN_BASKET });
                this.setState({
                  form: {
                    name: "",
                    phone: "",
                    address: "",
                    flat: "",
                    entrance: "",
                    floor: "",
                    intercom: "",
                    comment: "",
                  },
                  payType: "cash",
                  beskontaktnaya: false,
                  tools: true,
                  toolsCount: 0,
                  bonusVisible: false,
                  bonusSum: 0,
                  agree: false,
                  error: null,
                  loading: false,
                  modalOpened: true,
                  token: token,
                });
              })
              .catch((err) => {
                console.log(err, err.response);
                this.setState({ error: err.response.data.message });
              })
              .finally(() => {
                this.setState({ loading: false });
              });
          })
          .catch((err) => {
            console.log(err, err.response);
            this.setState({ error: err.response.data.message });
          });
      }
    }
  };

  render() {
    const { t } = this.props;
    const { state } = this.context;

    const totalSum = state.cart.basket.reduce((acc, el) => {
      return acc + el.priceAll;
    }, 0);

    let maxBonuses = state.bonus;
    if (maxBonuses > 0.5 * totalSum) {
      maxBonuses = 0.5 * totalSum;
    }

    const disabledButtonStyle = {
      color: "rgba(0, 0, 0, 0.26)",
      backgroundColor: "#e0e0e0",
    };

    const token = store.get("24rolls") ? (store.get("24rolls").user ? store.get("24rolls").user.token : null) : null;

    console.log(this.state.bonusSum);

    return (
      <>
        <Modal
          show={this.state.modalOpened}
          modalClosed={() => {
            this.setState({ modalOpened: false });
            if (this.props.forMobile) {
              this.props.history.push(this.props.match.path.slice(0, 3) + "/");
            }
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "green",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              {t("order.orderOffer.processing")}
            </p>
          </div>
        </Modal>
        <div
          className={this.props.forMobile ? "mobile-order" : "right-customs"}
        >
          {this.props.forMobile && (
            <h2 style={{ marginBottom: "0" }}> твой заказ </h2>
          )}
          <div
            className="right-customs__bottom"
            style={
              this.props.forMobile ? { width: "90%", boxShadow: "none" } : {}
            }
          >
            <div className="right-customs__bottom__title">
              <img src={cake} alt="img"></img>
              <p>{t("components.menu.right.4")}</p>
            </div>
            <form className="right-customs__bottom__form">
              <div className="right-customs__bottom__form__name">
                <input
                  required
                  type="text"
                  placeholder={t("components.menu.right.2")}
                  value={this.state.form.name}
                  onChange={(e) => this.onInputChangeHandler(e, "name")}
                />
                <input
                  required
                  type="tel"
                  placeholder="+38(___)___-__-__"
                  value={this.state.form.phone}
                  onChange={(e) => this.onInputChangeHandler(e, "phone")}
                />
                <input
                  required
                  type="text"
                  placeholder={t("components.menu.right.5")}
                  value={this.state.form.address}
                  onChange={(e) => this.onInputChangeHandler(e, "address")}
                />
              </div>
              <div className="right-customs__bottom__form__address">
                <div className="right__bottom__form__address--item">
                  <p>{t("components.menu.right.6")}</p>
                  <input
                    type="text"
                    value={this.state.form.flat}
                    onChange={(e) => this.onInputChangeHandler(e, "flat")}
                  />
                </div>
                <div className="right-customs__bottom__form__address--item">
                  <p>{t("components.menu.right.7")}</p>
                  <input
                    type="text"
                    value={this.state.form.entrance}
                    onChange={(e) => this.onInputChangeHandler(e, "entrance")}
                  />
                </div>
                <div className="right-customs__bottom__form__address--item">
                  <p>{t("components.menu.right.8")}</p>
                  <input
                    type="text"
                    value={this.state.form.floor}
                    onChange={(e) => this.onInputChangeHandler(e, "floor")}
                  />
                </div>
                <div className="right-customs__bottom__form__address--item">
                  <p>{t("components.menu.right.9")}</p>
                  <input
                    type="text"
                    value={this.state.form.intercom}
                    onChange={(e) => this.onInputChangeHandler(e, "intercom")}
                  />
                </div>
              </div>
              <div className="right-customs__bottom__form__delivery">
                <input
                  disabled={this.state.payType === "cash"}
                  checked={this.state.beskontaktnaya}
                  onChange={() => {
                    this.setState((prevState) => ({
                      beskontaktnaya: !prevState.beskontaktnaya,
                    }));
                  }}
                  type="checkbox"
                  id={'checkbox_10'}
                />
                <label htmlFor={'checkbox_10'}>
                  <span> {t("components.menu.right.10")} </span>
                </label>
              </div>
              <div className="right-customs__bottom__form__option">
                <select
                  value={this.state.payType}
                  onChange={(e) => this.onSelectChange(e)}
                >
                  <option value={"cash"}>
                    {t("components.menu.right.11")}
                  </option>
                  <option value={"card"}>
                    {t("components.menu.right.12")}
                  </option>
                </select>
                {this.state.payType === "cash" && (
                  <input
                    required
                    type="text"
                    placeholder={t("components.menu.right.14")}
                  />
                )}

                <div className="right-customs__bottom__form__bonuses-use">
                  <div className="right-customs__bottom__form__bonuses-use__switcher">
                    <input
                      type="checkbox"
                      checked={this.state.bonusVisible}
                      onChange={() =>
                        this.setState((prevState) => ({
                          bonusVisible: !prevState.bonusVisible,
                        }))
                      }
                    />
                    <span>{t("order.orderOffer.bonusesUse")}</span>
                  </div>
                  <div
                    className="right-customs__bottom__form__bonuses-use__slidecontainer"
                    style={{
                      opacity: this.state.bonusVisible ? 1 : 0,
                      height: this.state.bonusVisible ? "100%" : "0px",
                    }}
                  >
                    {token ? (
                      <>
                        <input
                          onChange={(e) => {
                            this.onBonusChange(e);
                          }}
                          type="range"
                          min="0"
                          max={maxBonuses}
                          value={this.state.bonusSum}
                          className="slider"
                        />
                        <div className="right-customs__bottom__form__bonuses-use__slidecontainer__text">
                          <p
                            style={{
                              flex: "0 1 30%",
                            }}
                          >
                            <span style={{ fontWeight: "700" }}>
                              {this.state.bonusSum}
                            </span>{" "}
                            грн
                          </p>
                          <p
                            style={{
                              flex: "0 1 70%",
                              textAlign: "right",
                              fontSize: "12px",
                            }}
                          >
                            {t("order.orderOffer.bonusesAmount")}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p>{t("order.orderOffer.enabledBonuses")}</p>
                    )}
                  </div>
                </div>

                <div className="devices_input_disabled">
                  <span>{t("components.menu.right.15")}</span>
                  {this.state.tools && (
                    <div className="devices_input_disabled__tools">
                      <amp-img
                        onClick={() => {
                          this.setState((prevState) => ({
                            toolsCount:
                              prevState.toolsCount !== 0
                                ? prevState.toolsCount - 1
                                : 0,
                          }));
                        }}
                        itemType={"url"}
                        itemProp={"imgMinus"}
                        src={minus}
                        alt="minus"
                        width={"20"}
                        height={"20"}
                      />
                      <span>{this.state.toolsCount}</span>
                      <amp-img
                        onClick={() => {
                          this.setState((prevState) => ({
                            toolsCount: prevState.toolsCount + 1,
                          }));
                        }}
                        itemType={"url"}
                        itemProp={"imgPlus"}
                        src={plus}
                        alt="plus"
                        width={"20"}
                        height={"20"}
                        style={{ marginTop: "1.5px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="right-customs__bottom__form__checkbox">
                <input
                  checked={!this.state.tools}
                  onChange={() => {
                    this.setState((prevState) => ({
                      tools: !prevState.tools,
                    }));
                  }}
                  type="checkbox"
                  id={'checkbox_11'}
                />
                <label htmlFor={'checkbox_11'}>
                  <span>{t("components.menu.right.16")}</span>
                </label>
              </div>
              <div className="right-customs__bottom__form__area">
                <textarea
                  value={this.state.comment}
                  onChange={(e) => this.onInputChangeHandler(e, "comment")}
                  style={{
                    resize: "vertical",
                    minHeight: "30px",
                  }}
                  placeholder={t("components.menu.right.17")}
                />
              </div>
              <div className="right-customs__bottom__form__area__check">
                <input
                  checked={this.state.agree}
                  onChange={() => {
                    this.setState((prevState) => ({
                      agree: !prevState.agree,
                    }));
                  }}
                  type="checkbox"
                  id={'checkbox_12'}
                />
                <label htmlFor={'checkbox_12'}>
                  <p>{t("components.menu.right.18")}</p>
                </label>
              </div>
              {this.state.error && (
                <p className="right-customs__bottom__error-paragraph">
                  {this.state.error}
                </p>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    onClick={(e) => this.onOrderSubmit(e)}
                    disabled={!this.state.agree}
                    style={!this.state.agree ? disabledButtonStyle : null}
                  >
                    {t("button.checkout")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(withTranslation()(Order));
