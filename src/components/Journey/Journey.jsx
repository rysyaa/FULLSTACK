import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/mainlogo2.png";
import "../Journey/stylesJourney/Journey.css";
const Journey = () => {
  return (
    <div>
      {" "}
      <div className="life_conteiner2">
        <div className="life_turkey">
          <Link to="/tur2">
            <h1>TURKEY</h1>
          </Link>
        </div>
        <div className="life_cyprus">
          <Link to="/cyp2">
            <h1>CYPRUS</h1>
          </Link>
        </div>
        <div className="life_uae">
          <Link to="/uae2">
            <h1>UAE</h1>
          </Link>
        </div>
        <div className="life_thailand">
          <Link to="/tha2">
            <h1>THAILAND</h1>
          </Link>
        </div>
        <div className="life_greece">
          <Link to="/gre2">
            <h1>GREECE</h1>
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
    </div>
  );
};

export default Journey;
