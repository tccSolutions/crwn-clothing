import React from "react";
import { useSelector } from "react-redux";
import { CollectionItem } from "../collection-item/collection-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./shopping-cart-dropdown.styles.scss";

export const CartDropdown = () => {
    
    const items = useSelector(state=>state.cart.items);    
    
 
  return (
      
    <div className="cart-dropdown">       
      <div className="cart-items">
      {items.map((item)=><CollectionItem key={item.id} {...item}/>)}
      </div>
      <CustomButton >GO TO SHOPPING CART</CustomButton>
    </div>
  );
};
