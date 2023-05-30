import React from "react";
import "./stylesJourney2/India2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ind2img1 from "../../../assets/ind2img1.jpg";
import ind2img2 from "../../../assets/ind2img2.jpg";
import ind2img3 from "../../../assets/ind2img3.jpg";
import ind2img4 from "../../../assets/ind2img4.jpg";

const India2 = () => {
  return (
    <>
      <div className="glav_ind2">
        <div className="sod1_swi2">
          <img src={ind2img1} alt="" />
          <h1>
            Индия <tr /> Индия - это крупная страна в Южной Азии, известная
            своей богатой культурой, древней историей и разнообразными
            пейзажами. Вот несколько ключевых фактов о Индии:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ind2img2} alt="" />
          <h1>
            Тадж-Махал: Этот великолепный мавзолей в Агре является одним из
            самых известных архитектурных чудес мира. Он был построен могольским
            императором Шах-Джаханом в память о своей возлюбленной жене.
            Тадж-Махал прекрасен своей белоснежной мраморной архитектурой и
            считается символом великой любви.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Джайпур: Город Джайпур в штате Раджастан предлагает множество
            исторических достопримечательностей, включая Городской дворец,
            Амберский форт и Виндзорская площадь. Город также известен своей
            яркой и разнообразной архитектурой, включая розовые фасады зданий,
            за которые его иногда называют "розовым городом".
          </h1>
          <img src={ind2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ind2img4} alt="" />
          <h1>
            Гоа: Гоа - это популярный туристический пункт, известный своими
            пляжами и культурным наследием. Здесь можно насладиться солнцем и
            песком на пляжах Арамболь, Вагатор, Калангут и других, а также
            посетить колониальные церкви и храмы.
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

export default India2;
