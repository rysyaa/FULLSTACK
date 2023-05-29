import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Netherlands.css";

const Netherlands = () => {
  return (
    <>
      <div className="neder_container">
        <div className="neder_kart">
          <div className="neder_dren">
            <h3>DRENTHE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_flev">
            <h3>FLEVOLAND</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_frie">
            <h3>FRIESLAND</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_geld">
            <h3>GELDERLAND</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_gron">
            <h3>GRONINGEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_lim">
            <h3>LIMBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_noo">
            <h3>NOORD-BRABANT</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="neder_hol">
            <h3>NOORD-HOLLAND</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netherlands;
