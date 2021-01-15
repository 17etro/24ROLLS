import React from 'react';
import axios from 'axios';
import store from 'store';
import { withTranslation } from "react-i18next";
import { backendUrl } from '../../../config/config';


import { checkValidaty } from '../../../tools/checkValidaty';
import OrderPageWrapper from '../components/OrderPageWrapper';
import Spinner from '../../../components/Spinner/index';
import ErrorIndicator from '../../../components/Errors/ErrorIndicator/index';

class ChangePassword extends React.Component {

    state = {
        form: {
            oldPassword: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            newPassword: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            confirmedPassword: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        },
        formIsValid: false,
        wrongPassword: false,
        loading: true,
        bonusAmount: 0,
        error: false
    }

    componentDidMount() {
        axios.get(backendUrl + '/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
        .then(res => {
            const bonusAmount = res.data.user.sumUserBonus;
            this.setState({ bonusAmount: bonusAmount, error: false });
        })
        .catch(err => {
            console.log(err, err.response);
            this.setState({ error: true });
        })
        .finally(() => {
            this.setState({ loading: false });
        });

        if (this.state.error) {
            window.location.reload();
        }
    }

    inputChangedHandler = (event, inputID) => {
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm[inputID]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
        updatedFormElement.valid = checkValidaty(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        if (inputID === 'confirmedPassword') {
            updatedFormElement.valid = updatedFormElement.value === updatedForm['newPassword'].value;
        }

        updatedForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let inputIDs in updatedForm) {
            formIsValid = updatedForm[inputIDs].valid && formIsValid;
        };

        this.setState({
            form: updatedForm,
            formIsValid: formIsValid
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post(backendUrl + '/user/changePassword', {
            oldPass: this.state.form.oldPassword.value,
            newPass: this.state.form.newPassword.value
        }, {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(response => {
                this.props.history.push('/order/personal?recover-pass=true');
            })
            .catch(error => {
                if (error.response.data.message) {
                    this.setState({ wrongPassword: true });
                }
            });
    }


    render() {

        const labelInvalidStyle = {
            color: 'salmon',
            fontWeight: '500'
        };
        const inputInvalidStyle = {
            border: '2px solid salmon'
        };
        const disabledButtonStyle = {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: '#e0e0e0'
        };

        const { t } = this.props;

        return (
            <>
            {this.state.loading && !this.state.error ?
            (
                <Spinner />
            ) :
            this.state.error ? 
            (
                <ErrorIndicator />
            )
            :
            (
            <OrderPageWrapper
            {...this.props}
            title={t('order.changePassword.title')}
            bonusAmount={this.state.bonusAmount}
            >
            <div className={'change_password'}>
                <div className={'change_password_form'}>
                    <form>
                        <fieldset>
                            <label
                            style={!this.state.form.oldPassword.valid && this.state.form.oldPassword.touched ? labelInvalidStyle : null}>
                                {t('order.changePassword.oldPassword')}
                            </label>
                            <input
                                type="password"
                                value={this.state.form.oldPassword.value}
                                onChange={(e)=>this.inputChangedHandler(e, 'oldPassword')}
                                style={!this.state.form.oldPassword.valid && this.state.form.oldPassword.touched ? inputInvalidStyle : null}
                            />
                        </fieldset>
                        <fieldset>
                            <label
                            style={!this.state.form.newPassword.valid && this.state.form.newPassword.touched ? labelInvalidStyle : null}>
                                {t('order.changePassword.newPassword')}
                                </label>
                            <input
                                type="password"
                                onChange={(e)=>this.inputChangedHandler(e, 'newPassword')}
                                value={this.state.form.newPassword.value}
                                style={!this.state.form.newPassword.valid && this.state.form.newPassword.touched ? inputInvalidStyle : null}
                            />
                        </fieldset>
                        <fieldset>
                            <label
                            style={!this.state.form.confirmedPassword.valid && this.state.form.confirmedPassword.touched ? labelInvalidStyle : null}>
                                {t('order.changePassword.hewPasswordAgain')}
                            </label>
                            <input
                                type="password"
                                onChange={(e)=>this.inputChangedHandler(e, 'confirmedPassword')}
                                value={this.state.form.confirmedPassword.value}
                                style={!this.state.form.confirmedPassword.valid && this.state.form.confirmedPassword.touched ? inputInvalidStyle : null}
                            />
                            {
                                this.state.wrongPassword && 
                                <span style={{textAlign: 'center', marginTop: '5px'}}>
                                    {t('order.changePassword.wrongPassword')}
                                </span>
                            }
                        </fieldset>
                        <button
                            className={'button'}
                            onClick={(e)=>this.onSubmitForm(e)}
                            disabled={!this.state.formIsValid}
                            style={!this.state.formIsValid ? disabledButtonStyle : null}>
                                {t('order.menuOrder.changePassword')}
                        </button>
                    </form>
                    </div>
                </div>
            </OrderPageWrapper>
            )}
            </>
        );
    }
}

export default withTranslation()(ChangePassword);
