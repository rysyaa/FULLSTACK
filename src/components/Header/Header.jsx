import React from "react";
import mainlogo from "../../assets/mainlogo2.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="main_nav">
        <img src={mainlogo} alt="" />
        <div className="main_divhed">
          <h3>MAIN</h3>
          <h3>ABOUT</h3>
          <h3>TOUR</h3>
          <h3>BLOG</h3>
          <button>BOOK NOW</button>
        </div>
      </div>
    </>
  );
};

export default Header;
