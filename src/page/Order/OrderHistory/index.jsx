import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { backendUrl } from '../../../config/config'; 

import OrderPageWrapper from "../components/OrderPageWrapper";
import Spinner from '../../../components/Spinner/index';
import ErrorIndicator from '../../../components/Errors/ErrorIndicator/index';

const OrderHistory = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ bonusAmount, setBonusAmount ] = useState(0);
    const [ orders, setOrders ] = useState([]);

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
                console.log(res);
                const bonusAmount = res.data.user.sumUserBonus;
                const name = res.data.user.firstName;
                const orders = res.data.orders;
                const newOrders = orders.map((el, index) => ({
                    id: el.number,
                    name: name,
                    date: el.markDatetime.slice(0, 10),
                    time: el.markDatetime.slice(11, 16),
                    status: el.status,
                    price: el.totalSumm,
                    order: el.items.map((product, index) => ({
                        id: index,
                        name: product.offer.displayName,
                        price: product.initialPrice,
                        count: product.quantity
                    }))
                }));
                setBonusAmount(bonusAmount);
                setOrders(newOrders);
                setError(false);
            })
            .catch(err => {
                console.log(err, err.response);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const {t} = useTranslation()
    return (
        <>
        {loading && !error ?
        (
            <Spinner />
        ) : 
        error ? 
        (
            <ErrorIndicator />
        )
        :
        (
         <OrderPageWrapper
            {...props}
            title={t('order.historyOrders.title')}
            bonusAmount={bonusAmount}
            orderFooter={orders}
         >
            {
            !orders && 
            <div
                itemProp={'orderHistory'}
                itemScope
                className={'order_history'}
            >
                <p itemProp={'orderHistoryText'}>{t('order.historyOrders.notAnyOrders')}</p>
            </div>
            }
        </OrderPageWrapper>
        )}
        </>
    )
}

export default OrderHistory;