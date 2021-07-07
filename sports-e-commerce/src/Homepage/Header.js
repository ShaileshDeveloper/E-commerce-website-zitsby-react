import React, {useState} from "react";
import "./header.css";
import "./home.css";
import logoimg from "../images/logo-white.png";
import cartimage from "../images/cart.png";
import { NavLink } from "react-router-dom";
import { Usecart } from "../cartpage/cartcontext";

// import SearchIcon from 'material-ui/icons/Search'



export function HeaderHomepage(){
    const {state } = Usecart();
  return (
    <div className="header__container">
      <img
        className="header__logo"
        alt="notfound"
        src={logoimg}
        width="100px"
        height="30px"
      />
      <div className="header__navbar">
        <li className="option1">Home</li>
        <li className="option2">Products</li>
        <li className="option3">Login</li>
        <li>
          <NavLink to="/cart">
            <div className="cart-logo-container">
              <img src={cartimage} alt="not found" />
              <span>{state.cart.length}</span>
            </div>
          </NavLink>
        </li>
      </div>
    </div>
  );
}

function Header() {
    



    const {state , searchItems , setSearchInItems} = Usecart();
    console.log(searchItems)
  return (
    <div className="header__container">
      <img
        className="header__logo"
        alt="notfound"
        src={logoimg}
        width="100px"
        height="30px"
      />
      <div className="header__search">
        <input type="text" className="input-tag" value ={searchItems} onChange={(e) => setSearchInItems(e.target.value)}/>
        <button>search</button>
      </div>
      <div className="header__navbar">
        <li className="option1">Home</li>
        <li className="option2">Products</li>
        <li className="option3">Login</li>
        <li>
          <NavLink to="/cart">
            <div className="cart-logo-container">
              <img src={cartimage} alt="not found" />
              <span>{state.cart.length}</span>
            </div>
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Header;

