import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_HIDE_CART,
});