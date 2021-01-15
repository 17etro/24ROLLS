import React from 'react';
import Modal from '../UI/Modal/Modal';
import axios from 'axios';
import { backendUrl } from '../../config/config';

import './auth.scss';

import { checkValidaty } from '../../tools/checkValidaty';
import Spinner from '../Spinner/index';

class LogUpBlock extends React.Component {

    state = {
        logUpForm : {
            phone: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    isPhone: true
                }
            },
            email: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    maxLength: 50,
                    isEmail: true
                }
            },
            password: {
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
                    minLength: 6,
                }
            }
        },
        formIsValid: false,
        emailModalOpened: false,
        error: null,
        loading: false
    }

    inputChangedHandler = (event, inputID) => {
        const updatedLogUpForm = {
            ...this.state.logUpForm
        };
        const updatedFormElement = {
            ...updatedLogUpForm[inputID]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
        updatedFormElement.valid = checkValidaty(
            event.target.value,
            updatedFormElement.validation
        );
        if (inputID === 'confirmedPassword') {
            updatedFormElement.valid = updatedFormElement.value === updatedLogUpForm['password'].value;
        }

        updatedLogUpForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let inputIDs in updatedLogUpForm) {
            formIsValid = updatedLogUpForm[inputIDs].valid && formIsValid;
        };

        this.setState({
            logUpForm: updatedLogUpForm,
            formIsValid: formIsValid
        });
    }

    onSubmitFormHandler = () => {

        this.setState({ loading: true });

        axios.post(backendUrl + '/signup', {
            phoneNumber: this.state.logUpForm.phone.value,
            email: this.state.logUpForm.email.value,
            password: this.state.logUpForm.password.value
        })
        .then(result => {
            if (result.status === 200 ) {
                this.setState({
                    emailModalOpened: true
                });
            }
            this.setState({ loading: false, error: null });
        })
        .catch(err => {
            let message = '';
            if (this.state.language === 'RU') {
                if ( err.response.status === 400 ) {
                    message = 'Данные уже заняты'
                } 
                if ( err.response.status === 500 ) {
                    message = 'Данные уже заняты'
                }
            } else {
                if ( err.response.status === 400 ) {
                    message = 'Данні вже зайняті'
                } 
                if ( err.response.status === 500 ) {
                    message = 'Данні вже зайняті'
                }
            }
            this.setState({ error: message, loading: false });
        });
    }

    onEmailModalClosedHandler = () => {
        this.setState({
            emailModalOpened: false
        })
    }
    render() {

        const labelInvalidStyle = "label-invalid-style";
        const inputInvalidStyle = "input-invalid-style";
        const disabledButtonStyle = "form-button-disabled log-up-button-fix";

        return (
            <>
            <Modal
            show={this.state.emailModalOpened}
            modalClosed={this.onEmailModalClosedHandler}
            >       
                <div style={{textAlign: 'center'}}>
                    <p>
                        {this.state.language === "RU" ? "Пожалуйста проверьте свою почту для подтверждения аккаунта" : "Будь-ласка перевірте свою пошту для підтвердження аккаунту" }
                    </p>
                </div>
            </Modal>

            <div className="log-in-block__container" style={{paddingBottom: '40px'}}>
                <div className="log-in-block log-up-block-fix">
                    <h3>{this.state.language==="RU" ? "Регистрация" : "Реєстрація"}</h3>

                    <label
                    className={!this.state.logUpForm.phone.valid && this.state.logUpForm.phone.touched ? labelInvalidStyle : null}
                    >
                        Ваш номер телефона
                    </label>
                    <input 
                    type="text" 
                    className={!this.state.logUpForm.phone.valid && this.state.logUpForm.phone.touched ? inputInvalidStyle : null }
                    placeholder="+380-99-99-99-999"
                    value={this.state.logUpForm.phone.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "phone")} />

                    <label
                    className={!this.state.logUpForm.email.valid && this.state.logUpForm.email.touched ? labelInvalidStyle : null}
                    >
                        Ваш email
                    </label>
                    <input 
                    type="text" 
                    className={!this.state.logUpForm.email.valid && this.state.logUpForm.email.touched ? inputInvalidStyle : null }
                    placeholder="Ваш email"
                    value={this.state.logUpForm.email.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "email")} />
                    
                    <label 
                    style={{marginTop: '20px'}}
                    className={!this.state.logUpForm.password.valid && this.state.logUpForm.password.touched ? labelInvalidStyle : null }
                    >
                        Ваш пароль
                    </label>
                    <input 
                    type="password" 
                    className={!this.state.logUpForm.password.valid && this.state.logUpForm.password.touched ? inputInvalidStyle : null }
                    placeholder={this.state.language === "RU" ? "Введите ваш пароль" : "Введіть ваш пароль"} 
                    value={this.state.logUpForm.password.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "password")} />

                    <label 
                    style={{marginTop: '20px'}}
                    className={!this.state.logUpForm.confirmedPassword.valid && this.state.logUpForm.confirmedPassword.touched ? labelInvalidStyle : null }
                    >
                        {this.state.language === "RU" ? "Подтвердите пароль" : "Підтвердіть пароль"}
                    </label>
                    <input 
                    type="password" 
                    className={!this.state.logUpForm.confirmedPassword.valid && this.state.logUpForm.confirmedPassword.touched ? inputInvalidStyle : null }
                    placeholder={this.state.language === "RU" ? "Подтвердите ваш пароль" : "Підтвердіть ваш пароль"}  
                    value={this.state.logUpForm.confirmedPassword.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "confirmedPassword")} />

                    {this.state.error && <p className="log-in-block__error">{this.state.error}</p>}

                    {this.state.loading ? <Spinner /> :
                    <button 
                    style={{ width: '100%', minWidth: '220px', padding: '20px' }}
                    disabled={! this.state.formIsValid} className={!this.state.formIsValid ? disabledButtonStyle : "log-up-button-fix"}
                    onClick={this.onSubmitFormHandler}>
                        {this.state.language === "RU" ? "Зарегистрироваться" : "Зареєструватись"}
                    </button>}
                </div>
                <p onClick={this.props.switchMode}>
                    {this.state.language === "RU" ? "У меня есть аккаунт" : "У мене є аккаунт"}
                </p>
            </div>
            </>
        );
    }
}

export default LogUpBlock;