import React from "react";
import homeBanner from "../images/image1.png";
import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-banner-text">
        <h1>
          <strong>
            You got everything what is takes <br />
            But it will take everything you have
          </strong>
        </h1>
        <NavLink to="/mensproduct">
          <button className="btn">
            <strong>Explore now</strong>
          </button>
        </NavLink>
      </div>
      <div className="home-banner">
        <img src={homeBanner} alt="not found" />
      </div>
    </div>
  );
}

export default Home;
