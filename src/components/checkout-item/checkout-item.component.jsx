import React from 'react';
import './checkout-item.styles.scss'

export const CheckoutItem=({item})=>{



return(
    <div className="checkout-item">
    <span>
      {" "}
      <img src={item.imageUrl} alt={item.name} />
    </span>

    <span className='name'>{item.name}</span>
    <span className='quantity'>{item.quantity}</span>
    <span className='price'>{`$${item.price * item.quantity}`}</span>
    <span>&#10005;</span>
  </div>
)
}