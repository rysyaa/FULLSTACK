import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/mainlogo2.png";
import "./Header.css";
import "../Cart/Register.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className={`main_nav ${showNav ? "show" : ""}`}>
        <img src={mainlogo} alt="" />

        <div className="main_divhed">
          <Link to="/">
            <h3>MAIN</h3>
          </Link>
          <Link to="/ticket">
            <h3>TICKET</h3>
          </Link>
          <h3>CART</h3>
          <h3>FAVORITES</h3>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      <div
        style={{
          left: "10px",
          top: "10px",
          padding: "0.3em",
          width: "20%",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "1em",
        }}
        className={`burger ${showNav ? "open" : ""}`}
        onClick={toggleNav}
      >
        <div style={{ marginRight: "80%" }} className="line"></div>
        <div style={{ marginRight: "80%" }} className="line"></div>
        <div style={{ marginRight: "80%" }} className="line"></div>
        {showNav ? (
          <div className="main_divhed">
            <h3 style={{ color: "black" }}>MAIN</h3>
            <h3 style={{ color: "black" }}>ABOUT</h3>
            <h3 style={{ color: "black" }}>TOUR</h3>
            <h3 style={{ color: "black" }}>BLOG</h3>
            <button style={{ color: "black" }}>Register</button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
