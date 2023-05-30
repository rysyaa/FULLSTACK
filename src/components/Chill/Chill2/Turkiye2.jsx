import React from "react";
import "./stylesChill2/Turkiye2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import tur2img1 from "../../../assets/tur2img1.jpg";
import tur2img2 from "../../../assets/tur2img2.jpg";
import tur2img3 from "../../../assets/tur2img3.jpg";
import tur2img4 from "../../../assets/tur2img4.jpg";

const Turkiye2 = () => {
  return (
    <>
      <div className="glav_tur2">
        <div className="sod1_swi2">
          <img src={tur2img1} alt="" />
          <h1>
            Турция <tr /> Турция - это уникальная страна, расположенная на
            границе Европы и Азии, с богатой историей, культурным наследием и
            красивыми природными пейзажами. Вот краткая информация о Турции:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={tur2img2} alt="" />
          <h1>
            География: Турция имеет стратегическое положение, простираясь на
            двух континентах. Она граничит с восемью странами и омывается
            четырьмя морями: Эгейским, Средиземным, Мраморным и Черным.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Историческое наследие: Турция богата историческими памятниками и
            археологическими достопримечательностями. Здесь находятся такие
            известные места, как Стамбульский Собор Святой Софии, города Эфес и
            Троя, гробница Мавзолея в Галикарнасе, античный город Памуккале и
            многие другие.
          </h1>
          <img src={tur2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={tur2img4} alt="" />
          <h1>
            Стамбул: Стамбул - это культурная и историческая столица Турции.
            Здесь можно посетить Гранд-базар, Дворец Топкапы, Голубую мечеть и
            другие знаменитости. Босфорский пролив делает Стамбул уникальным,
            разделяя его на две части - европейскую и азиатскую.
          </h1>
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

export default Turkiye2;
