import React, { useState } from "react";
import mainlogo from "../../assets/mainlogo2.png";
import "./Header.css";

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
          <h3>MAIN</h3>
          <h3>ABOUT</h3>
          <h3>TOUR</h3>
          <h3>BLOG</h3>
          <button>Register</button>
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
