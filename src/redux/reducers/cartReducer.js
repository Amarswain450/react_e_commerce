import { ADD_TO_CART, REMOVE_ONE_ITEM_TO_CART, REMOVE_TO_CART } from "../types/cartTypes"


const initialState = {
    carts: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const find_index = state.carts.findIndex((ele) => ele.id === action.payload.id);
            console.log("find_index", find_index); 
            // /console.log(state.carts[find_index].qnty);
            // console.log(action.payload);
            if (find_index >= 0) {
                state.carts[find_index].qnty += 1;
                //console.log(",,,,", state.carts);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const newItem = { ...action.payload, qnty: 1 }
                //console.log(newItem);
                return {
                    ...state,
                    carts: [...state.carts, newItem]
                }
            }

        case REMOVE_TO_CART:
            const data = state.carts.filter((e) => e.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case REMOVE_ONE_ITEM_TO_CART:
            const find__index = state.carts.findIndex((ele) => ele.id === action.payload.id);
            if (state.carts[find__index].qnty >= 1) {
                state.carts[find__index].qnty -= 1;
                //console.log("dltiteams", dltiteams);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[find__index].qnty === 1) {
                const data = state.carts.filter((e) => e.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }
            }

        default:
            return state
    }
}