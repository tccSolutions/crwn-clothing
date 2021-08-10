import React from "react";
import { PreviewItem } from "../preview-item/preview-item.component";
import './shop-preview.styles.scss'
export const ShopPreview = ({ collection, title }) => (
  <div className="collection-preview">
    <h2 className="title">{title}</h2>
    <div className='preview'>
      {collection.slice(0, 4).map(({ id,...collectionProps }) => (
       <PreviewItem key={id} {...collectionProps}/>
      ))}
    </div>
  </div>
);
