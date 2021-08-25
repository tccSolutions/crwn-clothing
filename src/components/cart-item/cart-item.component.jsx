import React from "react";
import "./cart-item.styles.scss";

export const CartItem = ({ imageUrl, quantity, price,name }) => {
  return (
    <div className="cart-item">
      <img className="cart-image" src={imageUrl} alt="cart" />
      <div className='detail-container'>
        <span className="cart-description">{`${name}`}</span>
        <span className="cart-description">{`${quantity} X $${price}`}</span>
      </div>
    </div>
  );
};
