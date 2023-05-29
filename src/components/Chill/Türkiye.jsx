import React from "react";
import { Link } from "react-router-dom";
import "./stylesChill//Türkiye.css";

const Türkiye = () => {
  return (
    <>
      <div className="tur_container">
        <div className="tur_kart">
          <div className="tur_ank">
            <h3>ANKARA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_ist">
            <h3>ISTANBUL</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_edr">
            <h3>EDIRNE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_bur">
            <h3>BURSA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_izm">
            <h3>IZMIR</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_bod">
            <h3>BODRUM</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_fet">
            <h3>FETHIYE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="tur_ant">
            <h3>ANTALIA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Türkiye;
