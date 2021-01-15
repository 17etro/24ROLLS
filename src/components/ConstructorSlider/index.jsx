import React from "react";
import { useTranslation } from 'react-i18next';

import './index.scss';
import Basket from '../Basket';
import LeftSlider from './LeftSlider';
import {useCustomStore} from "../../context/useStore";
import * as R from "ramda";

const ConstructorSlider = (props) => {
    const { state } = useCustomStore();
    const { t } = useTranslation();
    const totalPrice = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('priceAll')
    )(state.yourSet.basketYourSet) : 0;
    const totalWeight = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('weightAll')
    )(state.yourSet.basketYourSet) : 0;
    const totalCountBasket = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('countBasket')
    )(state.yourSet.basketYourSet) : 0;
    return (
        <div className="constructor-slider">
            <div className="content">
                <div className="content_left">
                </div>
                <div className="content_right">
                    <h4>{t('components.constructorSlider.title')}</h4>
                    <ul className={'content'}>
                        {
                            props.items.map((el, index) =>
                                <LeftSlider slider={el} key={index} />
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="text">
                <span>{t('components.constructorSlider.text')}</span>
                <p>
                    {totalPrice}грн / {totalWeight}гр   /   {totalCountBasket}шт</p>
                <Basket style={'open-modalTwo'} title={'button.inBasket'} />
            </div>
        </div>
    );
}

export default ConstructorSlider;