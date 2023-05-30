import React from "react";
import "./stylesLife2/Switzerland2.css";
import swi2bg from "../../../assets/swi2bg.jpg";
import swi2img1 from "../../../assets/swi2img1.jpg";
import swi2img2 from "../../../assets/swi2img2.jpg";
import swi2img3 from "../../../assets/swi2img3.jpg";
import mainlogo from "../../../assets/mainlogo2.png";

const Switzerland2 = () => {
  return (
    <>
      <div className="glav_swi2">
        <div className="sod1_swi2">
          <img src={swi2img1} alt="" />
          <h1>
            Швейцария <tr /> Швейцария славится своими красивыми пейзажами,
            включая Альпы, озера, реки и зеленые долины. Она также известна
            своими банками, финансовым сектором, высоким качеством жизни и
            длительным сроком жизни населения Экономика Швейцарии одна из самых
            развитых в мире. Страна известна своими высокотехнологичными
            промышленными отраслями, включая производство фармацевтических
            препаратов, часов, банковского дела и машиностроения.{" "}
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={swi2img2} alt="" />
          <h1>
            Высокий уровень жизни: Швейцария имеет один из самых высоких уровней
            жизни в мире. Здесь предоставляются высокие заработные платы,
            высокий уровень социальной защищенности, доступ к качественным
            услугам здравоохранения и образованию, а также высокий уровень
            безопасности.{" "}
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Экономическая стабильность: Швейцария имеет стабильную и развитую
            экономику. Страна славится высокотехнологичными отраслями,
            банковским сектором, инновационными предприятиями и высоким уровнем
            производительности. Это создает хорошие возможности для
            трудоустройства и развития карьеры.{" "}
          </h1>
          <img src={swi2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={swi2bg} alt="" />
          <h1>
            Качество образования: Швейцария имеет отличную систему образования.
            Здесь есть высоко рейтинговые университеты и школы, предлагающие
            широкий выбор программ обучения. Высокий уровень образования
            открывает двери к возможностям для молодежи и помогает в развитии
            карьеры.
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

export default Switzerland2;
