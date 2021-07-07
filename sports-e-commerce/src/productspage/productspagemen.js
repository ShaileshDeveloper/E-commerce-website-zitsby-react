import React from "react";
import "./productspagemen.css";
import { Card } from "../Homepage/productsection";
import { datamenproducts } from "../Data/datahomepage";
import {Usecart} from "../cartpage/cartcontext"

function ProductsPageMen() {

    const {searchItems} = Usecart();
  return (
    <>
      <div className="product__section__container">
        {datamenproducts.filter((item) => {
         if(searchItems ===""){
             return item
         }else if (item.product.includes(searchItems)){
             return item
         }
        }).map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </>
  );
}

export default ProductsPageMen;
