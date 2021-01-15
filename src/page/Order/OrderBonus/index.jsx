 import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {backendUrl} from '../../../config/config';
import axios from 'axios';
import store from 'store';

import OrderPageWrapper from "../components/OrderPageWrapper";
import ErrorIndicator from '../../../components/Errors/ErrorIndicator/index';
import Spinner from '../../../components/Spinner/index';
import bonus from '../../../assets/page/Order/bonus.svg';
import {bonusInformation} from './list';

const OrderBonus = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ bonusAmount, setBonusAmount ] = useState(0);
    const [percentUserBonus, setPercentUserBonus] = useState(5);
    const [ totalSum, setTotalSum ] = useState(0);
    const [ toNextLevel, setToNextLevel ] = useState(5000);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        if (error) {
            window.location.reload();
        }
    }, []);

    useEffect(() => {
        axios.get(backendUrl + '/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(res => {
                const bonusAmount = res.data.user.sumUserBonus;
                const totalOrdersSum = res.data.user.sumUserOrders;
                const percentUserBonus = res.data.user.percentUserBonus;
                let toNextLevel;
                if ( totalOrdersSum < 5000 ) {
                    toNextLevel = 5000 - totalOrdersSum;
                } else if ( totalOrdersSum >= 5000 & totalOrdersSum < 10000 ) {
                    toNextLevel = 10000 - totalOrdersSum;
                } else {
                    toNextLevel = 0;
                }
                setPercentUserBonus(percentUserBonus ? percentUserBonus : 5);
                setBonusAmount(bonusAmount);
                setTotalSum(totalOrdersSum);
                setToNextLevel(toNextLevel);
                setError(false);
            })
            .catch(error => {
                console.log(error, error.response);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const {t} = useTranslation()
    return (
        <>
        {loading && !error
        ?
        (
            <Spinner />
        )
        :
        error ?
        (
            <ErrorIndicator />
        )
        :
        (
            <OrderPageWrapper 
            {...props}
            title={t('order.bonusAccount.title')}
            bonusAmount={bonusAmount}>
            <div
                itemProp={'orderBonus'}
                itemScope
                className={'order_bonus'}
            >
                <div className="order_bonus_icons">
                    <div
                        className={'img'}
                        itemProp={'orderBonusImg'}
                        itemScope
                    >
                        <img
                            itemProp={'img'}
                            itemType={'url'}
                            src={bonus}
                            alt=""
                        />
                    </div>
                    <div
                        itemProp={'orderBonusPercents'}
                        itemScope
                        className={'percents'}>
                        <div
                            itemProp={'orderBonusPercentsList'}
                            className={'list'}
                        >
                            <li
                                itemProp={'orderBonusPercentsListLi'}
                                className={percentUserBonus === 5 ? 'active' : undefined}
                            >
                                5%
                            </li>
                            <li
                                itemProp={'orderBonusPercentsListLi'}
                                className={percentUserBonus === 7 ? 'active center' : 'center'}
                            >
                                7%
                            </li>
                            <li 
                            itemProp={'orderBonusPercentsListLi'}
                            className={percentUserBonus === 10 ? 'active' : undefined}>
                                10%
                            </li>
                        </div>
                    </div>
                </div>
                <div
                    itemProp={'orderBonusInformtion'}
                    itemScope
                    className={'order_bonus_information'}>
                    {toNextLevel !== 0 ? 
                    <p itemProp={'orderBonusInformtionText'}>
                        {t('order.bonusAccount.youOrdered')} <b>{totalSum} грн.</b>  {t('order.bonusAccount.left')} <b>{toNextLevel} грн.</b> {t('order.bonusAccount.levelOfBonuses')}
                    </p> :
                    <p>
                        {t('order.bonusAccount.youOrdered')} <b>{totalSum} грн.</b> У вас уже максимально доступная скидка!
                    </p>}
                    <h1 itemProp={'orderBonusInformtionName'}>
                        {t('order.bonusAccount.bonusProgram')}
                    </h1>
                    {
                        bonusInformation.map(el =>
                            <li
                                itemProp={'orderBonusInformtionList'}
                                key={el.id}
                            >
                                {t(`${el.text}`)}
                            </li>
                        )
                    }
                </div>
            </div>
        </OrderPageWrapper>
        )
        }
    </>
    );
}

export default OrderBonus;