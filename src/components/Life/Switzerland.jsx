import React from "react";
import { Link } from "react-router-dom";
import "../Life/styles.Life/Switzeland.css";
import mainlogo from "../../assets/mainlogo2.png";

const Switzerland = () => {
  return (
    <>
      <div className="sweden_container">
        <div className="sweden_kart">
          <div className="sweden_stok">
            <h3>STOCKHOLM</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_got">
            <h3>GOTHENBURG</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_karl">
            <h3>KARLSKRONA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_mal">
            <h3>Malmo</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_lin">
            <h3>LINKOPING</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_kir">
            <h3>KIRUNA</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_yst">
            <h3>YSTAD</h3>
            <Link to="/ticket">
              <button>BUY TICKET</button>
            </Link>
          </div>
          <div className="sweden_kal">
            <h3>KALMAR</h3>
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

export default Switzerland;
