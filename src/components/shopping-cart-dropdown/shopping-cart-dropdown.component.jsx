import React from "react";
import { useSelector } from "react-redux";
import { CustomButton } from "../custom-button/custom-button.component";
import "./shopping-cart-dropdown.styles.scss";

export const CartDropdown = () => {
 
 
  return (
      
    <div className="cart-dropdown">       
      <div className="cart-items" />
      <CustomButton>GO TO SHOPPING CART</CustomButton>
    </div>
  );
};
