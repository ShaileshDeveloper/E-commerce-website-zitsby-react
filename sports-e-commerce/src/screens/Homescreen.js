import React from 'react'
import Home from '../Homepage/Home'
import Header from '../Homepage/Header'
import "./homescreen.css"
import Category from '../Homepage/category'

function Homescreen() {
    return (
        <div>
        <div className="home_screen">
        <Header />
            <Home />
            
        </div>
        <Category />
        </div>
    )
}

export default Homescreen
