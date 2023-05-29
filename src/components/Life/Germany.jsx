import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Germany.css";

const Germany = () => {
  return (
    <>
      <div className="ger_container">
        <div className="ger_kart">
          <div className="ger_bav">
            <h3>BAVARIA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_ber">
            <h3>BERLIN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_bra">
            <h3>BRANDENBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_bre">
            <h3>BREMEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_ham">
            <h3>HANBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_hem">
            <h3>HAMBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ges_hes">
            <h3>HESSEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ger_sax">
            <h3>SAXONY</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Germany;
