import React from "react";
import { Link } from "react-router-dom";
import "../Journey/stylesJourney/Norway.css";
import mainlogo from "../../assets/mainlogo2.png";

const Norway = () => {
  return (
    <>
      <div className="nor_container">
        <div className="nor_kart">
          <div className="nor_osl">
            <h3>OSLO</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_ber">
            <h3>BERGEN</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_sta">
            <h3>STAVANGER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_san">
            <h3>SANDNES</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_tro">
            <h3>TRONDHEIM</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_sand">
            <h3>SANDVIKA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_ask">
            <h3>ASKER</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="nor_dra">
            <h3>DRAMMEN</h3>
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

export default Norway;
