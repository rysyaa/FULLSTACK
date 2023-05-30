import React from "react";
import "./stylesChill2/Uae2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import uae2img1 from "../../../assets/uae2img1.jpg";
import uae2img2 from "../../../assets/uae2img2.jpg";
import uae2img3 from "../../../assets/uae2img3.jpg";
import uae2img4 from "../../../assets/uae2img4.jpg";

const Uae2 = () => {
  return (
    <>
      {" "}
      <div className="glav_uae2">
        <div className="sod1_swi2">
          <img src={uae2img1} alt="" />
          <h1>
            ОАЭ <tr /> Объединенные Арабские Эмираты (ОАЭ) - это государство,
            расположенное на Аравийском полуострове, на восточном побережье
            Аравийского залива. Вот краткая информация об ОАЭ:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={uae2img2} alt="" />
          <h1>
            Эмираты: ОАЭ состоит из семи эмиратов - Абу-Даби, Дубай, Шарджа,
            Аджман, Умм-эль-Кайвайн, Рас-эль-Хайма и Фуджайра. Каждый из
            эмиратов имеет свои особенности и достопримечательности.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Дубай: Дубай - это самый известный и популярный эмират, известный
            своими высотными небоскребами, роскошными отелями, торговыми
            центрами и огромными искусственными островами. Здесь можно посетить
            Бурдж-Халифу, самое высокое здание в мире, Пальмовые острова, Дубай
            Молл и другие достопримечательности.
          </h1>
          <img src={uae2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={uae2img4} alt="" />
          <h1>
            Абу-Даби: Абу-Даби - столица ОАЭ и второй по величине эмират. Здесь
            можно посетить Гранд Мечеть Шейха Зайда, Эмиратский дворец, Феррари
            Ворлд Абу-Даби и другие культурные и исторические
            достопримечательности.
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

export default Uae2;
