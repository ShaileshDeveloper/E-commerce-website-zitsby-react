import React from "react";
import Home from "../Homepage/Home";
import Header from "../Homepage/Header";
import "./homescreen.css";
import Category from "../Homepage/category";
import Productsection from "../Homepage/productsection";
import Footer from "../Homepage/footer";

function Homescreen() {
  return (
    <div>
      <div className="home_screen">
        <Header />
        <Home />
      </div>
      <div className="background">
        <Category />
        <Productsection />
        <Footer />
      </div>{" "}
    </div>
  );
}

export default Homescreen;
