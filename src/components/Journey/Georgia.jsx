import React from "react";
import { Link } from "react-router-dom";
import "./stylesJourney/Georgia.css";

const Georgia = () => {
  return (
    <>
      <div className="geor_container">
        <div className="geor_kart">
          <div className="geor_atl">
            <h3>ATLANTA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_col">
            <h3>COLOMBUS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_aug">
            <h3>AUGUSTA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_mac">
            <h3>MACON</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_sav">
            <h3>SAVANNAH</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_ath">
            <h3>ATHENS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_ros">
            <h3>ROSWELL</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="geor_alb">
            <h3>ALBANY</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Georgia;
