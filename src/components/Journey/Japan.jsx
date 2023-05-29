import React from "react";
import { Link } from "react-router-dom";
import "./stylesJourney/Japan.css";

const Japan = () => {
  return (
    <>
      <div className="jap_container">
        <div className="jap_kart">
          <div className="jap_tok">
            <h3>TOKYO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_sai">
            <h3>SAITAMA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_aic">
            <h3>AICHI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_aki">
            <h3>AKITA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_chi">
            <h3>CHIBA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_fuk">
            <h3>FUKUI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_gif">
            <h3>GIFU</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="jap_gum">
            <h3>GUMMA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Japan;
