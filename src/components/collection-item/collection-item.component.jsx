import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CustomButton } from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

export const CollectionItem = ({ id,name, imageUrl, price }) => {

  const dispatch = useDispatch();
  
  return(
  <div className="collection-item">
    <div className='image-container'>
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    </div>
    

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`$${price}`}</span>     
    </div>
    <CustomButton inverted className='custom-button' onClick={()=>{dispatch(addItem({id,name, imageUrl, price}))}}>ADD TO CART</CustomButton>
  </div>
  );
}
