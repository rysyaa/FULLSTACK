import React from "react";
import { Link } from "react-router-dom";
import "./stylesDanger/Venezuela.css";
import mainlogo from "../../assets/mainlogo2.png";

const Venezuela = () => {
  return (
    <>
      {" "}
      <div className="ven_container">
        <div className="ven_kart">
          <div className="ven_ama">
            <h3>AMAZONAS</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ven_apu">
            <h3>APURE</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="ven_bar">
            <h3>BARINAS</h3>
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

export default Venezuela;
