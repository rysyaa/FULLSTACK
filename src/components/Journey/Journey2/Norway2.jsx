import React from "react";
import "./stylesJourney2/Norway2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import nor2img1 from "../../../assets/nor2img1.jpg";
import nor2img2 from "../../../assets/nor2img2.jpg";
import nor2img3 from "../../../assets/nor2img3.jpeg";
import nor2img4 from "../../../assets/nor2img4.jpg";
const Norway2 = () => {
  return (
    <>
      <div className="glav_nor2">
        <div className="sod1_swi2">
          <img src={nor2img1} alt="" />
          <h1>
            Норвегия <tr /> Норвегия - это страна, расположенная в Северной
            Европе, на северо-западе Скандинавского полуострова. Она граничит с
            Россией, Финляндией и Швецией, а также имеет выход к Северному
            Ледовитому океану. Норвегия известна своей красивой и разнообразной
            природой, включая фьорды, горы и северное сияние.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={nor2img2} alt="" />
          <h1>
            Фьорды: Норвегия славится своими красивыми фьордами, такими как
            Гейрангерфьорд, Неройфьорд и Согн-фьорд. Эти глубоководные ущелья,
            окруженные высокими горами, предлагают великолепные виды, круизы и
            возможности для путешествий на лодках и каяках.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Горы: Норвегия предлагает великолепные возможности для любителей
            горных походов и альпинизма. Самой известной горной вершиной
            является Ютунгхеймен, находящаяся в национальном парке Ютунхаймен.
            Другие популярные горные районы включают Хардингейский ледник и горы
            Рюхшёрен и Рюхшётта.
          </h1>
          <img src={nor2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={nor2img4} alt="" />
          <h1>
            Ледяные поля: Норвегия предлагает уникальную возможность посетить
            ледяные поля, такие как ледник Бриксдаль и Йостедальсбренен. Здесь
            вы можете увидеть потрясающие ледяные пейзажи, а также пройти
            экскурсию по льду с опытным гидом.
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

export default Norway2;
