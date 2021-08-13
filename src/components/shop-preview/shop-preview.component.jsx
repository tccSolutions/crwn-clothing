import React from "react";
import {CollectionItem } from "../collection-item/collection-item.component";
import './shop-preview.styles.scss'

export const ShopPreview = ({ collection, title }) => (
  <div className="collection-preview">
    <h2 className="title">{title}</h2>
    <div className='preview'>
      {collection.slice(0, 4).map(({ id,...collectionProps }) => (
       <CollectionItem key={id} id={id} {...collectionProps}/>
      ))}
    </div>
  </div>
);
