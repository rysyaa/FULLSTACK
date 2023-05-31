import React from "react";
import "./stylesDanger2/Papua2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import pap2img1 from "../../../assets/pap2img1.jpg";
import pap2img2 from "../../../assets/pap2img2.jpg";
import pap2img3 from "../../../assets/pap2img3.jpg";

const Papua2 = () => {
  return (
    <>
      {" "}
      <div className="glav_pap2">
        <div className="sod1_swi2">
          <img src={pap2img1} alt="" />
          <h1>
            ПАПУА НОВАЯ ГВИНЕЯ <tr /> Папуа — Новая Гвинея, расположенная на
            острове Новая Гвинея в южной части Тихого океана, имеет некоторые
            особенности, которые могут считаться опасными и могут быть причиной,
            по которой некоторым людям рекомендуется избегать посещения этой
            страны:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={pap2img2} alt="" />
          <h1>
            Преступность: Папуа — Новая Гвинея имеет высокий уровень
            преступности, включая грабежи, вооруженные нападения, разбои и
            насилие. Криминал, особенно в столице Порт-Морсби и некоторых других
            крупных городах, может представлять серьезную угрозу для туристов.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Неспокойная общественная обстановка: Папуа — Новая Гвинея
            сталкивается с социальными и политическими проблемами, которые могут
            приводить к уличным протестам, демонстрациям и конфликтам. Это может
            создавать небезопасную обстановку для иностранных посетителей.
          </h1>
          <img src={pap2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={pap2img1} alt="" />
          <h1>
            Этнические и религиозные конфликты: В некоторых регионах Папуа —
            Новая Гвинея существуют этнические и религиозные конфликты, которые
            могут быть связаны с напряженными отношениями и насилием. Это может
            повысить риск стать свидетелем или попасть в конфликтную ситуацию.
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

export default Papua2;
