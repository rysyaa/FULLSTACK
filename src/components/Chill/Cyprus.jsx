import React from "react";
import { Link } from "react-router-dom";
import "./stylesChill/Cyprus.css";
import mainlogo from "../../assets/mainlogo2.png";

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
        <footer className="footer">
          <div className="footer__content">
            <div className="footer__left">
              <img className="footer__logo" src={mainlogo} alt="" />
              <p className="footer__description">
                Мы поможем вам организовать незабываемый отпуск
              </p>
            </div>
            <div className="footer__right">
              <h3 className="footer__title">Контакты</h3>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">Телефон: +1234567890</li>
                <li className="footer__contact-item">
                  Email: neotravel@example.com
                </li>
                <li className="footer__contact-item">
                  Адрес: ул. Примерная, 123, Город
                </li>
              </ul>
            </div>
          </div>
          <p className="footer__copy">
            &copy; 2023 <img src={mainlogo} alt="" />. Все права защищены.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Cyprus;
