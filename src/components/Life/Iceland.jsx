import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Iceland.css";

const Iceland = () => {
  return (
    <>
      <div className="ice_container">
        <div className="ice_kart">
          <div className="ice_rey">
            <h3>REYKJAVIK</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_kop">
            <h3>KOPAVOGUR</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_haf">
            <h3>HAFNARFJORDUR</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_kef">
            <h3>KEFLAVIK</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_aku">
            <h3>AKUREYRI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_gar">
            <h3>GARDABAER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_mos">
            <h3>MOSFELLSBAER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ice_arb">
            <h3>ARBORG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iceland;
