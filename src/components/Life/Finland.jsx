import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Finland.css";

const Finland = () => {
  return (
    <>
      <div className="fin_container">
        <div className="fin_kart">
          <div className="fin_hel">
            <h3>HELSINKI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_esp">
            <h3>ESPOO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_tam">
            <h3>TAMPERE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_van">
            <h3>VANTAA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_oul">
            <h3>OULU</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_tur">
            <h3>TURKU</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_jyv">
            <h3>JYVASKYLA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="fin_kou">
            <h3>KUOPIO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finland;
