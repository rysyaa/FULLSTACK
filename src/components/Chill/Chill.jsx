import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/mainlogo2.png";
import "../Chill/stylesChill/Chill.css";

const Chill = () => {
  return (
    <>
      {" "}
      <div className="life_conteiner1">
        <div className="life_norway">
          <Link to="/nor2">
            <h1>NORWAY</h1>
          </Link>
        </div>
        <div className="life_georgia">
          <Link to="/geo2">
            <h1>GEORGIA</h1>
          </Link>
        </div>
        <div className="life_india">
          <Link to="/ind2">
            <h1>INDIA</h1>
          </Link>
        </div>
        <div className="life_italy">
          <Link to="/ita2">
            <h1>ITALY</h1>
          </Link>
        </div>
        <div className="life_japan">
          <Link to="/jap2">
            <h1>JAPAN</h1>
          </Link>
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

export default Chill;
