import React from "react";
import "./preview-item.styles.scss";

export const PreviewItem = ({ name, imageUrl, price }) => (
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
  </div>
);
