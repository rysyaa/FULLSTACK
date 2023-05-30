import React from "react";
import { Link } from "react-router-dom";
import "./stylesChill/Uae.css";
import mainlogo from "../../assets/mainlogo2.png";

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

export default Uae;
