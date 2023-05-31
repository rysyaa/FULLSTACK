import React from "react";
import "./stylesDanger2/Venezuela2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ven2img1 from "../../../assets/ven2img1.jpg";
import ven2img2 from "../../../assets/ven2img2.JPG";
import ven2img3 from "../../../assets/ven2img3.jpg";
import ven2img4 from "../../../assets/ven2img3.jpg";
const Venezuela2 = () => {
  return (
    <>
      {" "}
      <div className="glav_ven2">
        <div className="sod1_swi2">
          <img src={ven2img1} alt="" />
          <h1>
            Венесуэла <tr /> Венесуэла - страна в Южной Америке, которая
            столкнулась с серьезными проблемами безопасности и
            социально-экономическими трудностями. Вот некоторые факторы, которые
            могут считаться опасными и причинами, по которым некоторые люди
            рекомендуют избегать посещения Венесуэлы:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ven2img2} alt="" />
          <h1>
            Преступность: Венесуэла имеет один из самых высоких уровней
            преступности в мире. Разбойные нападения, грабежи, автокражи и
            насилие являются распространенными проблемами. Криминальные
            группировки, известные как "коллективы", активны во многих районах и
            могут создавать опасность для туристов.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Политическая нестабильность: Венесуэла в последние годы столкнулась
            с политическими конфликтами и социальными протестами. Напряженная
            политическая обстановка может привести к уличным протестам,
            демонстрациям и потенциальным столкновениям с полицией или
            вооруженными силами.
          </h1>
          <img src={ven2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ven2img4} alt="" />
          <h1>
            Экономические проблемы: Венесуэла столкнулась с глубоким
            экономическим кризисом, который привел к высокой инфляции, дефициту
            товаров и услуг, а также снижению уровня жизни населения. Это может
            создавать неприятные условия для иностранных посетителей.
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

export default Venezuela2;
