import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { useHistory } from "react-router";
import { toggleCart } from "../../redux/cart/cart.actions";
import "./shopping-cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const history = useHistory();
  return (
    <div className="cart-dropdown">
      {!items.length ? (
        <div className="empty-message">
          <h3> Cart is Empty</h3>
        </div>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <CustomButton onClick={()=>{history.push("/cart");dispatch(toggleCart());}} >GO TO SHOPPING CART</CustomButton>
    </div>
  );
};
