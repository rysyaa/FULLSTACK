import React from "react";
import { Link } from "react-router-dom";
import "./stylesJourney/India.css";
const India = () => {
  return (
    <>
      <div className="ind_container">
        <div className="ind_kart">
          <div className="ind_mum">
            <h3>MUMBAI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_del">
            <h3>DELHI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_ban">
            <h3>BANGALORE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_hyd">
            <h3>HYDERABAD</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_ahm">
            <h3>AHMEDABAD</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_che">
            <h3>CHENNAI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_kol">
            <h3>KOLKATA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ind_sur">
            <h3>SURAT</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default India;
