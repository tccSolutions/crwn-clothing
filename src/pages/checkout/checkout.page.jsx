import React from "react";
import { useSelector } from "react-redux";
import { CheckoutHeader } from "../../components/checkout-header/checkout-header.component";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

export const Checkout = () => {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (accumulatedQuantity, item) =>
      accumulatedQuantity + item.price * item.quantity,
    0
  );

  
  return (
    <div className="checkout-page">
      <CheckoutHeader />
      {items.map((item) => (
       <CheckoutItem key={item.id}item={item}/>
      ))}
      <div className="total">
        <span>{`TOTAL: $${total}`}</span>
      </div>
    </div>
  );
};
