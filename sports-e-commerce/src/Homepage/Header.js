import React, { useState } from "react";
import "./header.css";
import "./home.css";
import logoimg from "../images/logo-white.png";
import cartimage from "../images/cart.png";
import { NavLink } from "react-router-dom";
import { Usecart } from "../cartpage/cartcontext";
import { auth } from "../firebase";

// import SearchIcon from 'material-ui/icons/Search'

export function HeaderHomepage() {
  const { state  } = Usecart();


const handleAuthentication =() => {
  if(state.user){
    auth.signOut();
  }
}

  return (
    <div className="header__container">
      <img
        className="header__logo"
        alt="notfound"
        src={logoimg}
        width="100px"
        height="30px"
      />
      <h3 className = "greeting__header">Hello {state.user ? state.user.email : "Guest"}</h3>
      <div className="header__navbar">
        <NavLink to="/">
          <li className="option1">Home</li>
        </NavLink>
        <NavLink to="/mensproduct">
          <li className="option2">Products</li>
        </NavLink>
        <NavLink to="/wishlist">
          <li className="option3">Wishlist</li>
        </NavLink>
        
        <NavLink to={ !state.user && "/login"}>
          <li 
          onClick={handleAuthentication}
          className="option4">{state.user ? "sign out" :"sign in"}</li>
        </NavLink>
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
  const { state, searchItems, setSearchInItems } = Usecart();
  console.log(searchItems);
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
        <input
          type="text"
          className="input-tag"
          value={searchItems}
          onChange={(e) => setSearchInItems(e.target.value)}
        />
        <button>search</button>
      </div>

     
      <div className="header__navbar">
        <NavLink to="/">
          <li className="option1">Home</li>
        </NavLink>
        <NavLink to="/mensproduct">
          <li className="option2">Products</li>
        </NavLink>
        <NavLink to="/wishlist">
          <li className="option3">Wishlist</li>
        </NavLink>
        <NavLink to="/login">
          <li className="option4">Login</li>
        </NavLink>
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
