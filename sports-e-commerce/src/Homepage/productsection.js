import React from 'react'
import "./productsection.css"
import data from '../Data/datahomepage'

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
