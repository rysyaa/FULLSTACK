import React from "react";
import "./stylesJourney2/Japan2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import jap2img1 from "../../../assets/jap2img1.jpg";
import jap2img2 from "../../../assets/jap2img2.jpg";
import jap2img3 from "../../../assets/jap2img3.jpg";
import jap2img4 from "../../../assets/jap2img4.jpg";

const Japan2 = () => {
  return (
    <>
      {" "}
      <div className="glav_jap2">
        <div className="sod1_swi2">
          <img src={jap2img1} alt="" />
          <h1>
            Япония <tr /> Япония - это островное государство в Восточной Азии,
            известное своей уникальной культурой, технологическими достижениями
            и красивыми природными ландшафтами. Вот некоторая краткая информация
            о Японии:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={jap2img2} alt="" />
          <h1>
            География: Япония состоит из более чем 6 800 островов, самые крупные
            из которых - Хонсю, Хоккайдо, Кюшу и Шикоку. Она омывается Тихим
            океаном на востоке и Японским морем на западе.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Культура: Япония славится своим уникальным культурным наследием,
            которое включает гейш, чайные церемонии, традиционные танцы,
            искусство бонсай и икебана (цветочные композиции). Традиции, такие
            как самурайский кодекс бусидо, также являются важной частью японской
            культуры.
          </h1>
          <img src={jap2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={jap2img4} alt="" />
          <h1>
            Технологии: Япония славится своими технологическими достижениями.
            Она является одной из ведущих стран в области автомобилестроения,
            электроники, робототехники и промышленного производства.
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

export default Japan2;
