import React from "react";
import { Link } from "react-router-dom";
import "../Journey/stylesJourney/Norway.css";

const Norway = () => {
  return (
    <>
      <div className="nor_container">
        <div className="nor_kart">
          <div className="nor_osl">
            <h3>OSLO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_ber">
            <h3>BERGEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_sta">
            <h3>STAVANGER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_san">
            <h3>SANDNES</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_tro">
            <h3>TRONDHEIM</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_sand">
            <h3>SANDVIKA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_ask">
            <h3>ASKER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_dra">
            <h3>DRAMMEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Norway;
