import React from 'react'
import Header from '../Homepage/Header'
import {Usecart} from "../cartpage/cartcontext"
import "./wishlist.css"

export default function Wishlist() {

    const {state} = Usecart();
    return (
        <div>
            <Header />
            <div className = "product_section_container">
            {state.wishlist.map((item) => <CardwishlistComponent {...item} />)}
           </div> 
        </div>
    )
}


function CardwishlistComponent(item){
    const { dispatch } = Usecart();
  
    return (
        <>
      <div className="product">
        <img src={item.image} alt="ss" />
        <span style={{ color: "red" }}>{item.product}</span>
        <span style={{ color: "gray" }}>${item.price}</span>
        <div className="button__container">
          <button onClick={() => dispatch({ type: "ADD_TO_CART", item })}>
            AddToCart
          </button>
          
        </div>
      </div>

      </>
    );
}
