import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/mainlogo2.png";
import "../Work/stylesWork/Work.css";

const Work = () => {
  return (
    <>
      <div className="life_conteiner3">
        <div className="life_anglia">
          <Link to="/ang2">
            <h1>ANGLIA</h1>
          </Link>
        </div>
        <div className="life_usa">
          <Link to="/usa2">
            <h1>USA</h1>
          </Link>
        </div>
        <div className="life_kanada">
          <Link to="/can2">
            <h1>CANADA</h1>
          </Link>
        </div>
        <div className="life_germany">
          <Link to="/ger2">
            <h1>GERMANY</h1>
          </Link>
        </div>
        <div className="life_avstraliya">
          <Link to="/aus2">
            <h1>AVSTRALIYA</h1>
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

export default Work;
