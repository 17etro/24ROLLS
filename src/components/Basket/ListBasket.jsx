import React from 'react';
import { backendUrl } from '../../config/config';

import min from "../../assets/page/Rolls/min.svg";
import max from "../../assets/page/Rolls/max.svg";
import { ACTIONS} from '../../context/providerContext';
import {useCustomStore} from "../../context/useStore";

const ListBasket = ({list}) => {
    const {dispatch} = useCustomStore();
    return (
        <li
            itemProp={'modalList'}
            key={list._id}
        >
            <div className={'left'} key={'dl'}>
                <div className={'title-image'}>
                    <img
                        itemProp={'img'}
                        itemType={'url'}
                        src={backendUrl + `/${list.image}`}
                        alt={list.name_ru}
                    />
                </div>
                <div
                    itemProp={'ContentLeft'}
                    className={'left_text'}
                >
                    <h1 itemProp={'ContentTitle'}>{list.name_ru}</h1>
                    <p itemProp={'ContentDescription'}>{list.categoryId.name_ru}</p>
                </div>
            </div>
            <div className={'right'} key={'dr'}>
                <div
                    key={'dr1'}
                    itemProp={'ContentRight'}
                    className={'right_text'}
                >
                    <amp-img
                        itemProp={'imgMin'}
                        itemType={'url'}
                        src={min}
                        alt={'-'}
                        width={'12'}
                        height={'62'}
                        onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET_YOUR_SET, payload: list._id})}
                    >
                    </amp-img>
                    <span itemProp={'countBasket'}>
                        <p>
                            {
                                list.countBasket
                            }
                        </p>
                    </span>
                    <amp-img
                        itemProp={'imgMax'}
                        itemType={'url'}
                        src={max}
                        alt={'+'}
                        width={'12'}
                        height={'62'}
                        onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET, payload: list})}
                    >
                    </amp-img>
                </div>
                <div
                    key={'dr2'}
                    itemProp={'ContentPrice'}
                    className={'price'}
                >
                    <span itemProp={'price'}>
                        {list.price} грн.
                    </span>
                </div>
            </div>
        </li>
    )
}

export default ListBasket;