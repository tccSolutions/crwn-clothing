import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden :true,
  items :[]
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_HIDE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case cartActionTypes.ADD_ITEM_TO_CART:
          return{
              ...state,
              items: addItemToCart(state.items, action.payload)
          }
    default:
      return state;
  }
};
