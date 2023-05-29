import React from "react";
import { Link } from "react-router-dom";
import "./stylesJourney/Italy.css";

const Italy = () => {
  return (
    <>
      <div className="ita_container">
        <div className="ita_kart">
          <div className="ita_rome">
            <h3>ROMA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_mil">
            <h3>MILAN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_nap">
            <h3>NAPLES</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_tur">
            <h3>TURIN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_pal">
            <h3>PALERMO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_gen">
            <h3>GENOA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_bol">
            <h3>BOLOGNA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ita_flo">
            <h3>FLORENCE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Italy;
