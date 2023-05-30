import React from "react";
import "./stylesChill2/Thailand2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import tha2img1 from "../../../assets/tha2img1.jpg";
import tha2img2 from "../../../assets/tha2img2.jpg";
import tha2img3 from "../../../assets/tha2img3.png";
import tha2img4 from "../../../assets/tha2img4.jpg";

const Thailand2 = () => {
  return (
    <>
      {" "}
      <div className="glav_tha2">
        <div className="sod1_swi2">
          <img src={tha2img1} alt="" />
          <h1>
            Тайланд <tr /> Таиланд, официально известный как Королевство
            Таиланд, является популярным туристическим направлением в
            Юго-Восточной Азии. Вот краткая информация о Таиланде:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={tha2img2} alt="" />
          <h1>
            География: Кипр является третьим по величине островом в Средиземном
            море. Он расположен между Грецией и Турцией и имеет площадь около 9
            тысяч квадратных километров.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            История: Кипр имеет богатую историю, связанную с различными
            цивилизациями и культурами. Остров был колонизирован финикийцами,
            греками, римлянами и другими народами. В разное время Кипр находился
            под властью Византии, Крестоносцев, Османской империи и
            Великобритании.
          </h1>
          <img src={tha2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={tha2img4} alt="" />
          <h1>
            Культура: Кипр имеет уникальную смесь греческой и турецкой культур,
            которая проявляется в архитектуре, кухне, музыке и традициях.
            Традиционные танцы, такие как сиртаки, и музыкальные инструменты,
            такие как баглама и бужуки, являются характерными для кипрской
            культуры.
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

export default Thailand2;
