import React from 'react'
import "./productsection.css"
import data from '../Data/datahomepage'
import {Usecart} from "../cartpage/cartcontext"



function Productsection() {
    return (
        <div className="product__section__container">
            {data.map(item => {
                return <>
                <div className="product">
                <img src ={item.image} alt ="" />
                <span style ={{color : "red"}}>{item.product}</span>
                <span style ={{color : "gray"}}>${item.price}</span>
                <div>
                <button>AddToCart</button>
                <button>Wishlist</button>
                </div>
                
                </div>
                </>
            })}
           
        </div>
    )
}

export default Productsection




export function Card(item) {

const {setItemsInCart} = Usecart();


    return (
        <div className ="product" >
            <img src={item.image} alt ="ss" />
            <span style ={{color : "red"}}>{item.product}</span>
                <span style ={{color : "gray"}}>${item.price}</span>
                <div className ="button__container">
                <button onClick={() => setItemsInCart((dd) => [...dd , item])}>AddToCart</button>
                <button>Wishlist</button>
                </div>
        </div>
    )
}



