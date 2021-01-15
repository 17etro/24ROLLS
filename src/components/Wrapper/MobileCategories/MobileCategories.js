import React from 'react';
import { NavLink } from 'react-router-dom';
import { backendUrl } from '../../../config/config';
import { ACTIONS } from '../../../context/providerContext';
import { useCustomStore } from '../../../context/useStore';

import './mobileCategories.scss';

const MobileCategories = (props) => {

    const { dispatch } = useCustomStore();

    let categories = null;
    if (props.categories) {
        categories = props.categories.filter(el => {
            return ( el._id !== '5ff17a7f6158c22e503feaa1' );
        });
        categories = categories.slice(0, 6);
    }

    return (
        <div className="mobile-categories-container">
            {categories && categories.map((el) => (
                <NavLink 
                onClick={() => dispatch({ type: ACTIONS.DROP_FILTER })}
                key={el._id}
                to={props.match.path.slice(0, 3) + '/' + el.route}>
                    <img
                        className="mobile-categories-container__item"
                        src={backendUrl + '/' + el.image}
                        alt="" 
                    />
                </NavLink>
            ))}
        </div>
    );
};

export default MobileCategories;