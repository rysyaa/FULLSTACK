import React from "react";
import "./styles.Life/Life.css";
import mainlogo from "../../assets/mainlogo2.png";
import { Link } from "react-router-dom";

const Life = () => {
  return (
    <>
      <div className="life_conteiner">
        <div className="life_switzerland">
          <h1>SWEDEN</h1>
        </div>
        <div className="life_nederland">
          <h1>NEDERLAND</h1>
        </div>
        <div className="life_iceland">
          <h1>ICELAND</h1>
        </div>
        <div className="life_germany1">
          <h1>GERMANY</h1>
        </div>
        <div className="life_fynland">
          <h1>FYNLAND</h1>
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
    </>
  );
};

export default Life;
