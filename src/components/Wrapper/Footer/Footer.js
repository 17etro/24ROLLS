import React, { useState } from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import { NavLink } from "react-router-dom";
import { backendUrl } from '../../../config/config';
import Modal from '../../UI/Modal/Modal';

import './footer.scss';

//icons
import geo from '../../../assets/components/Wrapper/Footer/geo.svg';
import phone from '../../../assets/components/Wrapper/Footer/phone.svg';
import { checkValidaty } from '../../../tools/checkValidaty';

const footer = React.memo((props) => {
    const {t} = useTranslation();

    const [ email, setEmail ] = useState({
        value: '',
        valid: false,
        touched: false,
        validation: {
            isEmail: true,
            required: true,
            maxLength: 30
        }
    });
    const [ modalEmail, setModalEmail ] = useState(false);

    const onEmailInputChanged = (event) => {
        const updatedEmail = {
            ...email
        };
        updatedEmail.value = event.target.value;
        updatedEmail.touched = true;
        updatedEmail.valid = checkValidaty(event.target.value, updatedEmail.validation);

        setEmail(updatedEmail);

    };

    const onEmailConfirmedHandler = () => {
        axios.post(backendUrl + '/email/mail', {
            email: email.value
        })
        .then(res => {
            console.log(res);
            setEmail({
                value: '',
                valid: false,
                touched: false,
                validation: {
                    isEmail: true,
                    required: true,
                    maxLength: 30
                } 
            });
            setModalEmail(true);
            window.scrollTo(0, 0);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    const lang = props.lang;
    const path = props.match.path.slice(0, 3);
    let categories = props.categories;
    const slicedArray = [[], [], []];

    if ( categories ) {

        for (let i = 0 ; i < categories.length; i ++ ) {
            if (categories[i]._id === '5ff17a7f6158c22e503feaa1') {
                categories.splice(i, i + 1);
            };
        };

        categories.forEach((el, index) => {
            if ((index + 1) % 3 === 1) {
                slicedArray[0].push(el);
            } else if ((index + 1) % 3 === 2) {
                slicedArray[1].push(el);
            } else {
                slicedArray[2].push(el);
            }
        });
    }

    const modalForSuccessEmail = (
        <>
            <p style={{ textAlign: 'center' }}>
                {'Отлично. Теперь вы будете получать рассылку на свою электронную почту!'}
            </p>
        </>
    );

    return (
        <div className="custom-footer">
            <Modal
            show={modalEmail}
            modalClosed={()=>setModalEmail(false)}
            >
                {modalForSuccessEmail}
            </Modal>
            <div className="content">
                <div className="content_left">
                    <div className="content_left__contacts">
                        <div>
                            <h3>{t('components.footer.title.1')}</h3>
                            <ul>
                                <li key={'f-li-1'}>
                                    <img src={geo} alt="img"></img>
                                    <span>{t('components.footer.contact.1')}</span>
                                </li>
                                <li key={'f-li-2'}>
                                    <img src={phone} alt="img"></img>
                                    <span>068 719 24 24</span>
                                </li>
                                <li key={'f-li-3'}>
                                    <img src={phone} alt="img"></img>
                                    <span>050 719 24 24</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content_left__menu">
                        <h3>{t('components.footer.title.2')}</h3>
                        <div className="content_left__menu__list">
                            {slicedArray[0] && 
                            <ul style={{paddingLeft: '0px'}}>
                               {slicedArray[0].map((el, index) => (
                                   <li key={index}>
                                       <NavLink to={path + '/' + el.route} >
                                            {lang === 'ua' && el.name_ua}
                                            {lang === 'ru' && el.name_ru}
                                       </NavLink>
                                   </li>
                               ))} 
                            </ul>}
                            {slicedArray[1] && 
                            <ul>
                               {slicedArray[1].map((el, index) => (
                                   <li key={index}>
                                       <NavLink to={path + '/' + el.route} >
                                            {lang === 'ua' && el.name_ua}
                                            {lang === 'ru' && el.name_ru}
                                       </NavLink>
                                   </li>
                               ))} 
                            </ul>}
                            {slicedArray[2] &&
                            <ul>
                               {slicedArray[2].map((el, index) => (
                                   <li key={index}>
                                       <NavLink to={path + '/' + el.route} >
                                            {lang === 'ua' && el.name_ua}
                                            {lang === 'ru' && el.name_ru}
                                       </NavLink>
                                   </li>
                               ))} 
                            </ul>}
                        </div>
                    </div>
                </div>
                <div className="content_right">
                    <div className="content_right__info">
                        <h3>{t('components.footer.title.3')}</h3>
                        <ul>
                            <li>
                                <NavLink to={props.match.path + "/"}>
                                    {t('components.footer.aboutUs.1')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={props.match.path + "/"}>
                                    {t('components.footer.aboutUs.2')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={props.match.path + "/shares"}>
                                    {t('components.footer.aboutUs.3')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={props.match.path + "/delivery"}>
                                    {t('components.footer.aboutUs.4')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={props.match.path + "/about-us"}>
                                    {t('components.footer.aboutUs.5')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={props.match.path + "/blog"}>
                                    {t('components.footer.aboutUs.6')}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="content_right__get-news">
                        <input 
                        type="text" 
                        className={(!email.valid && email.touched) ? "input-invalid-style" : null}
                        value={email.value}
                        onChange={(e) => onEmailInputChanged(e)}
                        placeholder={t('components.footer.email')} />
                        <button
                        onClick={onEmailConfirmedHandler}
                        disabled={!email.valid}
                        >
                            {'Готово'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default footer;