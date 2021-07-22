import React from "react";
import mencontainerimage from "../images/category-1.jpg";
import womencontainerimage from "../images/category-3.jpg";
import kidscontainerimage from "../images/category-2.jpg";
import "./category.css";

import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="category__container">
      <div className="men__container">
        <NavLink to="/mensproduct">
          <img src={mencontainerimage} alt="ss" />
        </NavLink>
        <p>
          <strong>MEN</strong>
        </p>
      </div>
      <div className="women__container">
        <img src={womencontainerimage} alt="ss" />
        <p>
          <strong>WOMEN</strong>
        </p>
      </div>
      <div className="kids__container">
        <img src={kidscontainerimage} alt="ss" />
        <p>
          <strong>KIDS</strong>
          
        </p>
      </div>
    </div>
  );
}

export default Category;
