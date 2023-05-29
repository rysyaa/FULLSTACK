import React from "react";
import { Link } from "react-router-dom";
import "./stylesChill/Uae.css";

const Uae = () => {
  return (
    <>
      <div className="uae_container">
        <div className="uae_kart">
          <div className="uae_dub">
            <h3>DUBAI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_abu">
            <h3>ABU DHABI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_sha">
            <h3>SHARJAN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_al">
            <h3>AL AIN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_ajm">
            <h3>AJMAN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_ras">
            <h3>RAS al-KHAIMAH</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_mus">
            <h3>MUSAFFAH</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="uae_alf">
            <h3>AL FUJAIRAH</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uae;
