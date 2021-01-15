import React from 'react';
import { backendUrl } from '../../config/config';
import { useCustomStore } from '../../context/useStore';
import { ACTIONS } from '../../context/providerContext';

import './mobileFilters.scss';

const MobileFilters = (props) => {

    const { state, dispatch } = useCustomStore();

    return (
        <div className="mobile-filters-block-content">
            {props.filters && props.filters.map((el) => {
                return (
                    <div 
                    className="mobile-filters-block-content__container"
                    style={state.filterMode === el._id ? { border: '2px solid #F89F46'} : null}>
                    <img
                        onClick={
                            state.filterMode === el._id ?
                            () => dispatch({ type: ACTIONS.DROP_FILTER }) 
                            :
                            () => dispatch({ type: ACTIONS.SET_FILTER, filterId: el._id })
                        }
                        className="mobile-filters-block-content__container__item"
                        alt=""
                        src={backendUrl + '/' + el.image} 
                    />
                    </div>
                );
            })}
        </div>
    );
};

export default MobileFilters;