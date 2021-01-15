import React from 'react';
import { useTranslation } from 'react-i18next';

import {orderLink} from "../link";
import {NavLink} from "react-router-dom";
import order from "../../../assets/page/Order/order.svg";

const Menu = (props) => {
    const { t } = useTranslation();
    const path = props.match.path.slice(0, 3);

    return (
        <div
            itemProp={'leftBlockOrderList'}
            itemScope
            className={'left_block_order_list'}
        >
            {
                orderLink.map((item, index) =>
                    <li
                        itemProp={'leftBlockOrderListLi'}
                        key={index}
                    >
                        <NavLink
                            to={path + item.route}
                        >
                            {t(item.name)}
                        </NavLink>
                    </li>
                )
            }
        </div>
    )
}

const Score = (props) => {
    const { t } = useTranslation();
    return (
        <div className={'left_block_order_score'}>
            <div className={'left_block_order_score_block'}>
                <img src={order} alt=""/>
                <h1>{props.bonusAmount} грн.</h1>
                <p>{t('order.OnYourBonusAccount')}</p>
            </div>
        </div>
    )
}

const LeftBlockOrder = (props) => {
    return (
        <div className={'left_block_order'}>
            <Menu {...props}/>
            <Score 
            bonusAmount={props.bonusAmount}/>
        </div>
    )
}

export default LeftBlockOrder;