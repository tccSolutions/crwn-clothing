import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_HIDE_CART,
});

export const addItem = (item)=>({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})