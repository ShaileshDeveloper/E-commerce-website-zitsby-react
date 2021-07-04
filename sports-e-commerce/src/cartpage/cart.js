import React from 'react'
import "./cart.css"
import { Usecart } from './cartcontext'

function Cart() {

    const {itemsInCart} = Usecart();


    return (

        <>
        <div className="cart__container">
        <div className="cart__product__detail__section">
{itemsInCart.map(item => {
    return <>
    <div className="cart__product">
    <div className="cart__product__image__container">
               <img src ={item.image} alt="ss" />
           </div>
           <div className ="cart__product__description__container">
           <div className="span__container">
               <span>Price : ${item.price}</span>
               <span><small>{item.product}</small></span>
               </div>
               <div className ="cart__product__button__container">
                   <button>+</button>
                   {1}
                   <button>-</button>
               </div>
           </div>
           </div>
    </>
})}

           
        </div>
        <div className="cart__price__detail__section">
        <div className="cart__price__total">Total price <span>$52.99</span></div>
               <div className ="cart__quantity__total">Total quantity <span>{itemsInCart.length}</span></div>
        </div>
        </div>
               

        </>
    )
}

export default Cart
