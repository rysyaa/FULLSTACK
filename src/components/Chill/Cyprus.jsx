import React from "react";
import { Link } from "react-router-dom";
import "./stylesChill/Cyprus.css";

const Cyprus = () => {
  return (
    <>
      <div className="cyp_container">
        <div className="cyp_kart">
          <div className="cyp_nic">
            <h3>NICOSIA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_lim">
            <h3>LIMASSOL</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_pap">
            <h3>PAPHOS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_lam">
            <h3>LAMACA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_pro">
            <h3>PROTARAS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_tro">
            <h3>TROODOS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_dal">
            <h3>DALI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="cyp_ger">
            <h3>GERI</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cyprus;
