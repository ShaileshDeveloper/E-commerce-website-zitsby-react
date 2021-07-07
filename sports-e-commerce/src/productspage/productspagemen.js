import React from "react";
import "./productspagemen.css";
import { Card } from "../Homepage/productsection";
import { datamenproducts } from "../Data/datahomepage";

function ProductsPageMen() {
  return (
    <>
      <div className="product__section__container">
        {datamenproducts.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </>
  );
}

export default ProductsPageMen;
