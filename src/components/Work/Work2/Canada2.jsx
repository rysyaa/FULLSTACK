import React from "react";
import "./stylesWork2/Canada2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import can2img1 from "../../../assets/can2img1.jpg";
import can2img2 from "../../../assets/can2img2.jpeg";
import can2img3 from "../../../assets/can2img3.jpg";
import can2img4 from "../../../assets/can2img4.jpg";

const Canada2 = () => {
  return (
    <>
      {" "}
      <div className="glav_can2">
        <div className="sod1_swi2">
          <img src={can2img1} alt="" />
          <h1>
            Канада <tr /> Канада является привлекательным местом для учебы и
            работы благодаря своей высококачественной системе образования и
            разнообразным возможностям карьерного роста. Вот некоторые из лучших
            мест учебы и работы в Канаде:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={can2img2} alt="" />
          <h1>
            Торонто: Торонто является крупнейшим городом Канады и предлагает
            множество возможностей для работы в различных отраслях, включая
            финансы, технологии, медиа и другие.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Ванкувер: Ванкувер является экономическим центром Британской
            Колумбии и предлагает возможности работы в сферах туризма,
            киноиндустрии, технологий и других.
          </h1>
          <img src={can2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={can2img4} alt="" />
          <h1>
            Монреаль: Монреаль является крупным культурным и экономическим
            центром провинции Квебек и предлагает возможности для работы в
            сферах искусства, моды, гастрономии и технологий.
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

export default Canada2;
