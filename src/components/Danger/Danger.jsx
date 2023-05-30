import React from "react";
import mainlogo from "../../assets/mainlogo2.png";
import "../Danger/stylesDanger/Danger.css";

const Danger = () => {
  return (
    <>
      <div className="life_conteiner4">
        <div className="life_salvador">
          <h1>SALVADOR</h1>
        </div>
        <div className="life_venezuela">
          <h1>VENEZUELA</h1>
        </div>
        <div className="life_nigeria">
          <h1>NIGERIA</h1>
        </div>
        <div className="life_papua">
          <h1>PAPUA</h1>
        </div>
        <div className="life_afghanistan">
          <h1>AFGHANISTAN</h1>
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

export default Danger;
