import React from 'react';
import './checkout-header.styles.scss';

export const CheckoutHeader=()=>(
    <div className='checkout-header'>
    <div className='header-block'>
        <span>Product</span>
    </div>
    <div className='header-block'>
        <span>Description</span>
    </div>
    <div className='header-block'>
        <span>Quantity</span>
    </div>
    <div className='header-block'>
        <span>Price</span>
    </div>
    <div className='header-block'>
        <span>Remove</span>
    </div>
</div>
)