import React from "react";

import CustomPageWrapper from './CustomPageWrapper';
import LeftBlockOrder from "./LeftBlockOrder";
import OrderHistoryFooter from "./OrderHistoryFooter";

const OrderPageWrapper = (props) => (
        <div
            itemProp={'orderPageWrapper'}
            itemScope
            className={'order_page_wrapper'}
        >
            <div
                itemProp={'orderPageWrapperTitle'}
                className={'order_title'}
            >
                <h1 itemProp={'name'}>
                    {props.title}
                </h1>
            </div>
            <div
                itemProp={'orderPageWrapperContainer'}
                className={'order_container'}
            >
                <LeftBlockOrder 
                {...props}
                bonusAmount={props.bonusAmount}/>
                <CustomPageWrapper>
                    {props.children}
                </CustomPageWrapper>
            </div>
            {
                props.orderFooter && <OrderHistoryFooter footer={props.orderFooter}/>

            }
        </div>
)

export default OrderPageWrapper;