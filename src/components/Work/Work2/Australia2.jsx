import React from "react";
import "./stylesWork2/Australia2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import aus2img1 from "../../../assets/aus2img1.jpg";
import aus2img2 from "../../../assets/aus2img2.jpg";
import aus2img3 from "../../../assets/aus2img3.jpg";
import aus2img4 from "../../../assets/aus2img4.jpg";

const Australia2 = () => {
  return (
    <>
      {" "}
      <div className="glav_aus2">
        <div className="sod1_swi2">
          <img src={aus2img1} alt="" />
          <h1>
            Австралия <tr /> Австралия является привлекательным местом для учебы
            и работы благодаря своей высокой академической репутации и
            разнообразным возможностям карьерного развития. Вот некоторые из
            лучших мест учебы и работы в Австралии:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={aus2img2} alt="" />
          <h1>
            Австралийский национальный университет (ANU): ANU является одним из
            самых престижных университетов в Австралии, известным своими
            программами в области наук, гуманитарных наук и инженерии.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Университет Мельбурна: Университет Мельбурна является ведущим
            учебным заведением, известным своим высоким качеством образования во
            многих областях, включая бизнес, медицину, право и искусство.
          </h1>
          <img src={aus2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={aus2img4} alt="" />
          <h1>
            Университет Сиднея: Университет Сиднея является одним из старейших и
            самых престижных университетов в Австралии, предлагающим широкий
            спектр образовательных программ и исследовательских возможностей.
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

export default Australia2;
