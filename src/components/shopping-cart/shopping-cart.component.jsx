import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{ReactComponent as CartIcon} from '../../assets/shopping-bag.svg'
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './shopping-cart.styles.scss'

export const ShoppingCart=()=>{

    const items = useSelector(state=>state.cart.items)
    const dispatch = useDispatch();

    const itemCount =  items.reduce((accumulatedQuantity, item)=>
    accumulatedQuantity + item.quantity,0)

    return(
    <div className='cart-icon' onClick={()=>dispatch(toggleCart())}>
        <CartIcon className='shopping-icon' />
        <span className='shopping-count'>{itemCount}</span>
    </div>
    )
    }