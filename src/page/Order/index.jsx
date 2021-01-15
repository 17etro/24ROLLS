import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './index.scss';
import {routes} from './routes';
import OrderHistory from "./OrderHistory";
import OrderBonus from "./OrderBonus";
import OrderPersonal from "./OrderPersonal";
import ChangePassword from "./ChangePassword";

const Order = (props) => {

    const path = props.match.path.slice(0, 3);

    return (
       <Switch>
           <Route exact path={path + "/order"} render={() => (<Redirect to={routes.personal} />)} />
           <Route exact path={path + routes.bonus} render={(props) => <OrderBonus {...props} />} />
           <Route exact path={path + routes.history} render={(props) => <OrderHistory {...props} />} />
           <Route path={path + routes.personal} render={(props) => <OrderPersonal {...props} />} />
           <Route path={path + routes.changePassword} render={(props) => <ChangePassword {...props} />} />
           <Route path={path + routes.logout} />
       </Switch>
    )
}

export default Order;