import React from "react";
import ProductsPageMen , {SortComponent}from "../productspage/productspagemen";
import Header from "../Homepage/Header";
import Footer from "../Homepage/footer";

function Productsmenscreen() {
  return (
    <div>
      <Header />
      <SortComponent />
      <ProductsPageMen />
      <Footer />
    </div>
  );
}

export default Productsmenscreen;
