import React from 'react';
import {Link} from "react-router-dom";
import { backendUrl } from '../../config/config';
import { ACTIONS} from '../../context/providerContext';
import {useCustomStore} from "../../context/useStore";
import LazyLoad from 'react-lazy-load';

import './index.scss';

import min from "../../assets/page/Rolls/min.svg";
import max from "../../assets/page/Rolls/max.svg";
import Basket from '../Basket';

import ErrorBoundary from "../Errors/ErrorBoundary";
import { Icon } from 'react-icons-kit'
import {ic_favorite} from 'react-icons-kit/md/ic_favorite'
import {ic_favorite_border} from 'react-icons-kit/md/ic_favorite_border'

const CustomFoodBlock = React.memo((props) => {
    const {state, dispatch} = useCustomStore();
    return (
        <ErrorBoundary>
            <div
                itemProp={'customFoodBlock'}
                itemScope
                className={'container'}
                style={{marginBottom: props.margin}}
            >
                <div
                    itemProp={'containerList'}
                    className={!props.style ? 'container_block' :'container_list'}
                >
                {   
                props.food.filters[0] && 
                    <div 
                        className="triangle-for-filter-label"
                    >
                        {props.food.filters[0].name_ru}
                    </div>
                }
                    <div
                        itemProp={'listHeader'}
                        itemScope
                        className={'list_header'}
                    >
                        <LazyLoad
                        debounce={false}
                        offsetVertical={500}>
                            <img
                                itemProp={'img'}
                                itemType={'url'}
                                src={backendUrl + `/${props.food.image}`}
                                alt={props.food.name_ru}
                            />
                        </LazyLoad>
                    </div>
                    <div
                        itemProp={'listFooter'}
                        itemScope
                        className={'list_footer'}
                    >
                        <div
                            itemProp={'headerFooter'}
                            itemScope
                            className={'header'}
                        >
                            <Link
                                itemProp={'headerFooterTitle'}
                                to={props.match.path.slice(0, 3) + `/products/id/${props.food._id}`}
                                onClick={() => dispatch({type: ACTIONS.ADD_TO_PRODUCT, payload: props.food})}
                            >
                                <h1>
                                    {props.food.name_ru}
                                </h1>
                            </Link>
                            <div style={{  wordWrap: 'break-word' }}>
                                <span itemProp={'headerFooterText'}> 
                                    {props.food.description_ru.slice(0, 140)}
                                    {props.food.description_ru.length > 140 && "..."}
                                </span>
                            </div>
                        </div>
                        <div
                            itemProp={'centerFooter'}
                            itemScope
                            className={'center'}
                        >
                            <h1 itemProp={'centerFooterPrice'}>{props.food.price} грн.</h1>
                            <span>
                                <p itemProp={'weight'}>{props.food.weight} г.</p>
                                <p>{props.food.pieces &&  `${props.food.pieces} шт.`}</p>
                            </span>
                        </div>
                        <div
                            itemProp={'footerBlock'}
                            itemScope
                            className={'footer'}>
                            <div
                                itemProp={'footerBlockLeft'}
                                className={'footer_left'}>
                                <amp-img
                                    itemProp={'imgMin'}
                                    itemType={'url'}
                                    src={min}
                                    alt={'-'}
                                    onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET, payload: props.food._id})}
                                    width={'12'}
                                    height={'62'}
                                >
                                </amp-img>
                                <span itemProp={'countBasket'}>
                                            <p>{
                                                state.cart.basket!== undefined &&
                                                state.cart.basket.find(el => el.id === props.food._id) ?
                                                    state.cart.basket.map(el => {
                                                        if(el.id === props.food._id){
                                                            return el.countBasket
                                                        }
                                                    }) : 1
                                            }</p>
                                        </span>
                                <amp-img
                                    itemType={'imgMax'}
                                    itemScope
                                    src={max}
                                    alt={'+'}
                                    onClick={() =>  dispatch({type: ACTIONS.ADD_TO_BASKET, payload: props.food})}
                                    width={'12'}
                                    height={'62'}
                                >
                                </amp-img>
                            </div>
                            <Icon
                                icon={state.favourite.yourFavourite.find(el => el._id === props.food._id) ? ic_favorite : ic_favorite_border}
                                size={27}
                                style={{color: '#43A948'}}
                                onClick={() => dispatch({type: ACTIONS.ADD_TO_FAVOURITE, payload: props.food})}
                            />
                            <Basket style={'open-modal'} title={'button.basket'} />
                        </div>
                    </div>
                </div>
            </div>

        </ErrorBoundary>

    )
});

export default CustomFoodBlock;