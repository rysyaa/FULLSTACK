import React from "react";
import "./stylesJourney2/Italy2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ita2img1 from "../../../assets/ita2img1.jpg";
import ita2img2 from "../../../assets/ita2img2.jpg";
import ita2img3 from "../../../assets/ita2img3.jpg";
import ita2img4 from "../../../assets/ita2img4.jpg";

const Italy2 = () => {
  return (
    <>
      {" "}
      <div className="glav_ita2">
        <div className="sod1_swi2">
          <img src={ita2img1} alt="" />
          <h1>
            Италия <tr />
            Италия - это прекрасная страна в Южной Европе, известная своей
            богатой историей, культурным наследием, изысканной кухней и
            прекрасными пейзажами. Вот несколько ключевых фактов о Италии:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ita2img2} alt="" />
          <h1>
            География: Италия расположена на Апеннинском полуострове, омывается
            несколькими морями, включая Средиземное и Тирренское моря. Она
            граничит с Францией, Швейцарией, Австрией и Словенией.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Историческое наследие: Италия является родиной Римской империи и
            имеет богатое историческое наследие. В стране находятся такие
            знаменитые достопримечательности, как Колизей и Форум в Риме,
            Пизанская башня, Пантеон, Помпеи и множество других исторических
            памятников.
          </h1>
          <img src={ita2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ita2img4} alt="" />
          <h1>
            Искусство и архитектура: Италия славится своим искусством и
            архитектурой. В стране находятся множество музеев, галерей и
            соборов, где можно увидеть произведения итальянских мастеров, таких
            как Микеланджело, Рафаэль, Леонардо да Винчи и Боттичелли.
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

export default Italy2;
