import React from "react";
import "./productsection.css";
import data from "../Data/datahomepage";
import { Usecart } from "../cartpage/cartcontext";
import { checkItem } from "../util";
import { NavLink } from "react-router-dom";

export function Card(item) {
  const { state, dispatch } = Usecart();

  return (
    <div className="product">
      <img src={item.image} alt="ss" />
      <span
        style={{
          color: "red",
        }}
      >
        {item.product}
      </span>
      <span
        style={{
          color: "gray",
        }}
      >
        $ {item.price}
      </span>
      <div className="button__container">


        {
          checkItem(state.cart, item.id) ? (
          <NavLink to="/cart">
            <button> Go to cart </button>
            </NavLink>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                item,
              })
            }
          >
            AddToCart
          </button>
        )}



        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_WISHLIST",
              item,
            })
          }
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}

function Productsection() {
  return (
    <div className="product__section__container">
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
}

export default Productsection;
