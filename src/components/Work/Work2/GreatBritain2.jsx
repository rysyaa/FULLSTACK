import React from "react";
import "./stylesWork2/GreatBritain2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ang2img1 from "../../../assets/ang2img1.jpg";
import ang2img2 from "../../../assets/ang2img2.jpg";
import ang2img3 from "../../../assets/ang2img3.png";
import ang2img4 from "../../../assets/ang2img4.jpg";

const GreatBritain2 = () => {
  return (
    <>
      {" "}
      <div className="glav_ang2">
        <div className="sod1_swi2">
          <img src={ang2img1} alt="" />
          <h1>
            Великобритания <tr /> Великобритания является привлекательным местом
            для учебы и работы благодаря своим высококачественным
            образовательным учреждениям и широкому спектру возможностей для
            карьерного развития. Вот некоторые из лучших мест учебы и работы в
            Великобритании:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ang2img2} alt="" />
          <h1>
            Кембриджский университет: Известный своим академическим
            превосходством, Кембриджский университет является одним из старейших
            и наиболее престижных университетов в мире.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Оксфордский университет: Оксфордский университет также известен
            своим исключительным качеством образования и репутацией ведущего
            учебного заведения.
          </h1>
          <img src={ang2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ang2img4} alt="" />
          <h1>
            Лондонский университетский колледж: Лондонский университетский
            колледж (UCL) является одним из ведущих университетов в Лондоне и в
            мире, предлагая широкий спектр программ обучения.
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

export default GreatBritain2;
