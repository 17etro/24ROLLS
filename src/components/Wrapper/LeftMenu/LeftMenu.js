import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { backendUrl } from "../../../config/config";
import { useCustomStore } from "../../../context/useStore";
import { ACTIONS } from "../../../context/providerContext";
import LazyLoad from 'react-lazy-load';

import "./leftmenu.scss";

const leftMenu = React.memo((props) => {

  const { state, dispatch } = useCustomStore();

  const categories = props.categories;
  const filters = props.filters;
  const path = props.match.path;

  const lang = props.lang;
  const [ currentLocation, setCurrentLocation ] = useState(props.location.pathname);
  const [ filterCategory, setFilterCategory ] = useState(false);


  useEffect(async () => {
    await setCurrentLocation(props.location.pathname);

      setFilterCategory(false);
    if (categories) {
      categories.forEach((el) => {
        if ( props.location.pathname.indexOf(el.route) !== -1 ) {
          setFilterCategory(true);
        }
      });
    }

    if (!filterCategory) {
      dispatch({ type: ACTIONS.DROP_FILTER });
    }
  }, [ props ]);

  return (
    <div className="left-sidebar">
      <ul className="left-sidebar__list">
        {categories && categories.map((el) => {
          if (el._id === '5ff17a7f6158c22e503feaa1') {
            return null;
          } else {
            return (
              <li key={el._id}>
                <div style={{ width: '65px' }} >
                  <LazyLoad
                  debounce={false}
                  offsetVertical={500}
                  >
                    <img
                    alt="" 
                    style={{
                      maxWidth: '60px',
                      maxHeight: '35px'
                    }}
                    src={backendUrl + '/' + el.image} 
                    />
                  </LazyLoad>
                </div>
                <NavLink 
                  onClick={() => dispatch({ type: ACTIONS.DROP_FILTER })}
                  to={path + "/" + el.route}
                >
                  {el.name_ru}
                </NavLink>
              </li>
            )
          }
        })}
      </ul>
      <div className="left-bottom">
        <ul className="left-bottom__list">
          {filters && filters.map((el) => (
            <li key={el._id}>
              <div style={{ width: '55px' }}>
                <LazyLoad
                debounce={false}
                offsetVertical={500}
                >
                  <img
                  alt=""
                  style={{
                    maxWidth: '50px',
                    maxHeight: '45px'
                  }} 
                  src={backendUrl + '/' + el.image}
                  />
                </LazyLoad>
              </div>
              {filterCategory ?
              (
                <button
                onClick={
                  state.filterMode === el._id ?
                  () => dispatch({ type: ACTIONS.DROP_FILTER }) 
                  :
                  () => dispatch({ type: ACTIONS.SET_FILTER, filterId: el._id })
                }
                className={state.filterMode === el._id ? "active-filter-link-style" : undefined}
                >
                  {el.name_ru}
                </button>
              ) :
              (
                <NavLink 
                activeClassName="active-filter-link-style"
                to={path + '/' + el.route}
                >
                  {el.name_ru}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default leftMenu;
