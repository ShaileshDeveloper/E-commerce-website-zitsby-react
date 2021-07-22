import React from "react";
import logoimg from "../images/logo-white.png";
import { NavLink } from "react-router-dom";

import "./loginpage.css";
function Loginpage() {
  return (
    <div className="body">
      <div className="login__logo">
        <NavLink to="/">
          <img src={logoimg} alt="ss" />
        </NavLink>
      </div>
    </div>
  );
}

export default Loginpage;
