import React from 'react';
import { NavLink } from 'react-router-dom';

import './mobileMenu.scss';

const mobileMenu = React.memo(( props ) => {

    const path = props.match.path.slice(0, 3);

    return (
            <div className="mobile-menu">
                <ul>
                    <li><span><NavLink to={path + "/"}>меню</NavLink></span></li>
                    <li><span><NavLink to={path + "/shares"}>акции</NavLink></span></li>
                    <li><span><NavLink to={path + "/delivery"}>доставка/оплата</NavLink></span></li>
                    <li><span><NavLink to={path + "/about-us"}>контакты</NavLink></span></li>
                    <li><span><NavLink to={path + "/posts"}>блог</NavLink></span></li>
                </ul>
                <button className="mobile-menu__create-order">
                    <NavLink to={path + "/main-mobile/order"} >
                        Оформить заказ
                    </NavLink>
                </button>
                <button className="mobile-menu__log-in">
                    <NavLink to={path + "/main-mobile/log-in"}>
                        Войти в личный кабинет
                    </NavLink>
                </button>
            </div>
    );
});

export default mobileMenu;