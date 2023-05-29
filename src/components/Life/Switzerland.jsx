import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Switzeland.css";

const Switzerland = () => {
  return (
    <>
      <div className="sweden_container">
        <div className="sweden_kart">
          <div className="sweden_stok">
            <h3>STOCKHOLM</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_got">
            <h3>GOTHENBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_karl">
            <h3>KARLSKRONA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_mal">
            <h3>Malmo</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_lin">
            <h3>LINKOPING</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_kir">
            <h3>KIRUNA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_yst">
            <h3>YSTAD</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_kal">
            <h3>KALMAR</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switzerland;
