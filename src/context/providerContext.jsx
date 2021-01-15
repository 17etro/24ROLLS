import React, { createContext, useReducer } from 'react'

import {
    addToCartData,
    deleteToCartData,
    getCartData,
    setCartData,
    deleteToBasketYourSetAll,
    addToItem,
    addToYourCart,
    addFavourite
} from "../localStorage";

const initialState = getCartData('basketRolls24') || {
    yourSet: {
        basketYourSet: [],
    },
    cart: {
        basket:  [],
    },
    blog: {
        yourBlog: [],
    },
    product: [],
    favourite: {
        yourFavourite: []
    },
    bonus: 0,
    filterMode: null
}
const storeContext = createContext(initialState)
const { Provider } = storeContext

const ACTIONS = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    ADD_TO_BASKET_YOUR_SET: 'ADD_TO_BASKET_YOUR_SET',
    REMOVE_TO_BASKET: 'REMOVE_TO_BASKET',
    REMOVE_TO_BASKET_YOUR_SET: 'REMOVE_TO_BASKET_YOUR_SET',
    DELETE_TO_BASKET_YOUR_SET_ALL: 'DELETE_TO_BASKET_YOUR_SET_ALL',
    ADD_TO_BLOG: 'ADD_TO_BLOG',
    ADD_TO_PRODUCT: 'ADD_TO_PRODUCT',
    ADD_TO_FAVOURITE: 'ADD_TO_FAVOURITE',
    CLEAN_BASKET: 'CLEAN_BASKET',

    //for bonuses
    SET_BONUS_AMOUNT: 'SET_BONUS_AMOUNT',

    // for filters
    SET_FILTER: 'SET_FILTER',
    DROP_FILTER: 'DROP_FILTER',
}

const reducer = (state, action) => {
    const k = () => {switch (action.type) {
        case ACTIONS.ADD_TO_BASKET: {
            return {
                ...state,
                cart: {
                    basket: addToCartData(state.cart.basket, 'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: addToYourCart(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.ADD_TO_BASKET_YOUR_SET: {
            return {
                ...state,
                cart: {
                    basket: addToCartData(state.cart.basket, 'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: addToCartData(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.REMOVE_TO_BASKET:
            return {
                ...state,
                cart: {
                    basket: deleteToCartData(state.cart.basket,'basketRolls24', action.payload)
                }
            }
        case ACTIONS.REMOVE_TO_BASKET_YOUR_SET: {
            return {
                ...state,
                cart: {
                    basket: deleteToCartData(state.cart.basket,'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: deleteToCartData(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.DELETE_TO_BASKET_YOUR_SET_ALL: {
            return {
                ...state,
                yourSet: {
                    basketYourSet: deleteToBasketYourSetAll(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                },
                cart: {
                    basket: deleteToBasketYourSetAll(state.cart.basket,'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.ADD_TO_BLOG:
            return {
                ...state,
                blog:{
                    yourBlog: addToItem(state.blog.yourBlog, 'basketRolls24', action.payload)
                }
            }
        case ACTIONS.ADD_TO_PRODUCT:
            return {
                ...state,
                product: addToItem(state.product, 'basketRolls24', action.payload)
            }
        case ACTIONS.ADD_TO_FAVOURITE:
            return {
                ...state,
                favourite: {
                    yourFavourite: addFavourite(state.favourite.yourFavourite, action.payload)
                }
            }
        case ACTIONS.CLEAN_BASKET:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    basket: []
                }
            }
        // bonuses
        case ACTIONS.SET_BONUS_AMOUNT:
            return {
                ...state,
                bonus: action.bonus
            }

        // filters
        case ACTIONS.SET_FILTER:
            return {
                ...state,
                filterMode: action.filterId
            }
        case ACTIONS.DROP_FILTER:
            return {
                ...state,
                filterMode: null
            }
        default:
            throw new Error()
    }}

    const newStore = k();

    setCartData('basketRolls24', newStore);

    return newStore;
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { storeContext, StateProvider, ACTIONS }
