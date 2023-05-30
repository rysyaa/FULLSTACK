import React from "react";
import "../Life2/stylesLife2/Germany2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ger2img1 from "../../../assets/ger2img1.jpg";
import ger2img2 from "../../../assets/ger2img2.jpg";
import ger2img3 from "../../../assets/ger2img3.jpg";
import ger2img4 from "../../../assets/ger2img4.jpg";

const Germany2 = () => {
  return (
    <>
      {" "}
      <div className="glav_ger2">
        <div className="sod1_swi2">
          <img src={ger2img1} alt="" />
          <h1>
            Германия <tr /> Германия - это крупная страна в Центральной Европе.
            Она граничит с девятью странами, включая Данию, Польшу, Чехию,
            Австрию, Швейцарию, Францию, Люксембург, Бельгию и Нидерланды.
            Германия является крупнейшей экономикой Европы и одним из ведущих
            мировых экономических и политических игроков.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ger2img2} alt="" />
          <h1>
            Качество образования: Германия известна своей высококачественной
            системой образования. Университеты и высшие учебные заведения
            Германии предлагают широкий спектр программ и являются одними из
            наиболее рейтинговых в мире. Молодежь может получить высокое
            качество образования и доступ к международным возможностям.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Рабочие возможности: Германия имеет крупную и разнообразную
            экономику, предлагающую широкий спектр рабочих мест. Страна известна
            своими промышленными отраслями, технологическими инновациями и
            высоким уровнем производства. Для людей в рабочем возрасте это
            означает большие возможности для трудоустройства и развития карьеры.
          </h1>
          <img src={ger2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ger2img4} alt="" />
          <h1>
            Социальная защита и система здравоохранения: Германия обладает
            развитой системой социальной защиты, которая обеспечивает доступ к
            медицинскому обслуживанию, пенсиям и другим социальным льготам. Это
            особенно важно для пенсионеров, которые могут получать достойное
            обеспечение и медицинскую помощь.
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

export default Germany2;
