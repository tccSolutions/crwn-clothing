import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden :true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_HIDE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
