import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import store from 'store';
import { useTranslation } from 'react-i18next';

import './header.scss';
import Basket from "../../Basket";

// big icons
import logo from '../../../assets/components/Wrapper/Header/logo.png';
import favourite from '../../../assets/components/Wrapper/Header/favourite.svg';
import personal from '../../../assets/components/Wrapper/Header/personal.svg';
import select from '../../../assets/components/Wrapper/Header/select.png';

// small icons
import logoSmall from '../../../assets/components/Wrapper/Header/logo-small.svg';
import geoSmall from '../../../assets/components/Wrapper/Header/geo-small.svg';
import phoneSmall from '../../../assets/components/Wrapper/Header/phone-small.svg';
import moreSmall from '../../../assets/components/Wrapper/Header/more-small.svg';
import basket from "../../../assets/components/Wrapper/Header/basket.svg";

const Header = (props) => {
    
    const { t, i18n } = useTranslation();
    // state for language
    const [ language, setLanguage ] = useState(localStorage.getItem('i18nextLng'));
    const [ openedModalForLanguage, setOpenedModalForLanguage ] = useState(false);

    // state for city
    const [ openModalForCity, setOpenedModalForCity ] = useState(false);

    const langClick = (lang) => {
        setLanguage(lang)
        i18n.changeLanguage(lang);
        props.setLang(lang);
    }


    // handlers for city functions
    const setDniproCity = () => {
        props.onCityChange(1);
        setOpenedModalForCity(false);
        const storage = store.get('24rolls');
        storage.customOptions.city = 'Dnipro';
        store.set('24rolls', storage);
        props.onSetBaseName('/dp');
        props.history.push('/dp');
    };
    const setZaporijjaCity = () => {
        props.onCityChange(2);
        setOpenedModalForCity(false);
        const storage = store.get('24rolls');
        storage.customOptions.city = 'Zaporijja';
        store.set('24rolls', storage);
        props.onSetBaseName('/zp');
        props.history.push('/zp');
    }

    // stylesForModals
    let modalForLanguageStyles = "modal-window-for-language modal-window-closed";
    if ( openedModalForLanguage ) {
        modalForLanguageStyles = "modal-window-for-language modal-window-opened";
    }
    let modalForCityStyles = "modal-window-for-city modal-window-closed";
    if ( openModalForCity ) {
        modalForCityStyles = "modal-window-for-city modal-window-opened"
    }


    const path = props.match.path.slice(0, 3);

    return(
        <header className="header">
            <div className="header__column column">

                <div className="left-menu">
                   <div className="column">
                        {/* for big screens */}
                        <div className="left-menu__language">
                                <span
                                onClick={() => {
                                    setOpenedModalForLanguage(!openedModalForLanguage);
                                    setOpenedModalForCity(false);
                                }
                                }>
                                    {language}
                                </span>
                                <img
                                alt="select"
                                src={select}
                                onClick={() => {
                                    setOpenedModalForLanguage(!openedModalForLanguage);
                                    setOpenedModalForCity(false);
                                }
                                }/>
                            </div>
                            {/* modal for language */}
                            <div className={modalForLanguageStyles}>
                                <ul>
                                    <li key={'li-1'} onClick={
                                        ()=> {
                                            langClick("ru");
                                            setOpenedModalForLanguage(false);
                                        }
                                    }>
                                        RU
                                    </li>
                                    <hr style={{margin: "0"}}/>
                                    <li 
                                    key={'li-2'}
                                    onClick={
                                        ()=>{
                                            langClick("ua");
                                            setOpenedModalForLanguage(false);
                                        }
                                    }>
                                        UA
                                    </li>
                                </ul>
                            </div>
                            <div className="left-menu__city">
                                <label
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }>
                                {t('components.header.selectionCity')}
                                </label>
                                <span
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }>
                                    {t(`components.header.city.${props.city}`)}
                                </span>
                                <img
                                alt="select"
                                src={select}
                                style={{ marginTop: '5px', marginLeft: '5px'}}
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }/>
                            </div>
                            {/* modal for city */}
                            <div className={modalForCityStyles}>
                                <ul>
                                    <li 
                                    key={'li-3'}
                                    onClick={setDniproCity}>
                                        {t('components.header.city.1')}
                                    </li>
                                    <hr style={{margin: "0"}}/>
                                    <li 
                                    key={'li-4'}
                                    onClick={setZaporijjaCity}>
                                        {t('components.header.city.2')}
                                    </li>
                                </ul>
                            </div>
                            <div className="left-menu__phone">
                            Тел: (066)(098)(073)
                            <span>
                                560-44-24
                            </span>
                            </div>

                         {/* for small screens */}
                         <div className="left-menu_for-small-screens">
                            <div className="left-menu__item">
                                <a href="/#">
                                    <img src={geoSmall} alt="Geo" />
                                </a>
                            </div>
                            <div
                                className="left-menu__item"
                                style={{
                                    borderLeft: '2px solid white',
                                    borderRight: '2px solid white'
                                    }}>
                                <a href="/#">
                                    <img src={phoneSmall} alt="phone" />
                                </a>
                            </div>
                            <div className="left-menu__item">
                                <NavLink to={path + "/favourite"}>
                                    <img src={favourite} alt="img"></img>
                                </NavLink>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="pure" />

                <div className="right-menu">
                    <div className="right-menu__items">
                        {/* for big screens */}
                        <div className="right-menu__items__item bordered">
                            <Basket src={basket} style={'open-modalThree'}/>
                        </div>
                        <div className="right-menu__items__item bordered">
                            <NavLink to={path + "/favourite"}>
                                <img src={favourite} alt="img" />
                            </NavLink>
                        </div>
                        <div className="right-menu__items__item">
                            <NavLink to={path + (props.isAuthorized ? "/order/personal" : "/log-in")}>
                                <img src={personal} alt="img" />
                            </NavLink>
                        </div>

                        {/* for small screens */}
                        <div className="right-menu_for-small-screens">
                            <div className="left-menu__item">
                                    <Basket src={basket} style={'open-modalThree'} smallMode />
                                </div>  
                                <div 
                                    className="left-menu__item" 
                                    style={{
                                        borderLeft: '2px solid white',
                                        borderRight: '2px solid white'
                                        }}>
                                    <NavLink to={path + (props.isAuthorized ? "/order/personal" : "/log-in")}>
                                        <img src={personal} alt="personal" />
                                    </NavLink>
                                </div> 
                                <div className="left-menu__item">
                                    <NavLink to={path + "/main-mobile/menu"} >
                                        <img src={moreSmall} alt="more" />
                                    </NavLink>
                                </div>  
                            </div>
                        </div>
                </div>
            </div>
                 
            <div className="bottom__header">
                <div className="bottom__header__nav__logo" >
                            {/* for big screens */}
                            <img src={logo} alt="img" className="bottom__header_logo"/>
                             {/* for small screens */}
                            <img src={logoSmall} alt="img" className="bottom__header_logo-small"/>
                </div>

                {/* for huge screens */}
                <div className="bottom__header__items">
                    <div className="bottom__header__left-list">
                        <ul>
                            <li key={'h-li-1'} className="bordered_grey">
                                    <NavLink to={path + "/"} exact activeClassName="green-item">
                                        {t('components.header.menu.1')}
                                    </NavLink>
                            </li>
                            <li key={'h-li-2'} className="bordered_grey">
                                <NavLink to={path + "/shares"} activeClassName="green-item">
                                    {t('components.header.menu.2')}
                                </NavLink>
                            </li>
                            <li key={'h-li-3'}>
                                <NavLink to={path + "/delivery"} activeClassName="green-item">
                                    {t('components.header.menu.3')}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="pure" />
                    <div className="bottom__header__right-list">
                        <ul>
                            <li
                            key={'h-li-4'}
                            className="bordered_grey"
                            style={{ borderLeft: '2px solid #C4C4C4'}}>
                                <NavLink to={path + "/about-us"} activeClassName="green-item">{t('components.header.menu.4')}</NavLink>
                            </li>
                            <li key={'h-li-5'}>
                                <NavLink to={path + "/posts"} activeClassName="green-item">
                                    {t('components.header.menu.5')}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;