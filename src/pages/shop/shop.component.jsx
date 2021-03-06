import React, { useState } from "react";
import SHOP_DATA from "./Shop_Data";
import { ShopPreview } from "../../components/shop-preview/shop-preview.component";
import './shop.style.scss'

export const Shop = () => {
  const [collections = SHOP_DATA] = useState();

  return (
    <div className="shop">
      {collections.map((collection) => {
        return (
          <div key={collection.id}>           
            <ShopPreview             
              collection={collection.items}
              title={collection.title}
            />
          </div>
        );
      })}
    </div>
  );
};
