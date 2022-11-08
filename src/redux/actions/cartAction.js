import { ADD_TO_CART, REMOVE_TO_CART } from "../types/cartTypes"


export const addToCart = (item) => {
    return{
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeToCart = (id) => {
    return{
        type: REMOVE_TO_CART,
        payload: id
    }
}