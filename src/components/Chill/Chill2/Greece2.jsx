import React from "react";
import "./stylesChill2/Greece2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ger2img1 from "../../../assets/gre2img1.jpg";
import ger2img2 from "../../../assets/gre2img2.jpg";
import ger2img3 from "../../../assets/gre2img3.jpg";
import ger2img4 from "../../../assets/gre2img4.jpg";

const Greece2 = () => {
  return (
    <>
      {" "}
      <div className="glav_gre2">
        <div className="sod1_swi2">
          <img src={ger2img1} alt="" />
          <h1>
            Греция <tr /> Греция - это страна, расположенная в Южной Европе на
            Балканском полуострове. Вот краткая информация о Греции:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ger2img2} alt="" />
          <h1>
            История: Греция является одной из старейших цивилизаций в мире, с
            богатым историческим и культурным наследием. Она считается колыбелью
            западной цивилизации и родиной древнегреческой демократии,
            философии, литературы, олимпийских игр и многих других достижений.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Афины: Афины - столица Греции и один из главных туристических
            центров страны. Здесь находятся такие достопримечательности, как
            Парфенон, Акрополь, Национальный археологический музей, Агора и
            другие исторические и архитектурные объекты.
          </h1>
          <img src={ger2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ger2img4} alt="" />
          <h1>
            Олимп: Греция известна связью с древнегреческими мифами и богами.
            Гора Олимп, расположенная на севере страны, считается домом
            древнегреческих богов и местом, где проходили олимпийские игры
            древности.
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

export default Greece2;
