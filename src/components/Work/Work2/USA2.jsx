import React from "react";
import "./stylesWork2/USA2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import usa2img1 from "../../../assets/usa2img1.jpeg";
import usa2img2 from "../../../assets/usa2img2.jpg";
import usa2img3 from "../../../assets/usa2img3.jpg";
import usa2img4 from "../../../assets/usa2img4.jpg";
const USA2 = () => {
  return (
    <>
      {" "}
      <div className="glav_usa2">
        <div className="sod1_swi2">
          <img src={usa2img1} alt="" />
          <h1>
            США <tr />
            США предлагает широкие возможности для учебы и работы благодаря
            своей разнообразной системе образования и крупной экономике. Вот
            некоторые из лучших мест учебы и работы в США:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={usa2img2} alt="" />
          <h1>
            Силиконовая долина: Расположенная в Калифорнии, Силиконовая долина
            является главным центром технологической индустрии и предлагает
            множество возможностей для работы в сфере высоких технологий и
            стартапов.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Нью-Йорк: Нью-Йорк является крупнейшим финансовым центром США и
            предлагает множество возможностей для работы в финансовой, медиа,
            модной и других отраслях.
          </h1>
          <img src={usa2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={usa2img4} alt="" />
          <h1>
            Вашингтон, округ Колумбия: Вашингтон является политическим и
            административным центром США, и здесь находятся множество
            правительственных и неправительственных организаций, предлагающих
            возможности работы в области политики, международных отношений и
            права.
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

export default USA2;
