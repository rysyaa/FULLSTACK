import React from "react";
import "./stylesLife2/Netherlands2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ned2img1 from "../../../assets/ned2img1.jpg";
import ned2img2 from "../../../assets/ned2img2.jpg";
import ned2img3 from "../../../assets/ned2img3.jpg";
import ned2img4 from "../../../assets/ned2img4.jpg";

const Netherlands2 = () => {
  return (
    <>
      <div className="glav_ned2">
        <div className="sod1_swi2">
          <img src={ned2img1} alt="" />
          <h1>
            Нидерланды <tr /> Нидерланды, официально известные как Королевство
            Нидерландов, расположены в Западной Европе. Они граничат с Германией
            на востоке, Бельгией на юге и Северным морем на севере и западе.
            Нидерланды известны своими великолепными пейзажами, включающими
            каналы, тюльпаны, ветряные мельницы и плоские поля.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ned2img2} alt="" />
          <h1>
            Нидерланды привлекательны для различных категорий людей по ряду
            причин, включая молодежь, пенсионеров и людей трудоспособного
            возраста. Вот несколько основных причин, почему Нидерланды считаются
            привлекательным местом для жизни для этих групп: Высокий уровень
            жизни: Нидерланды имеют высокий уровень жизни и считаются одной из
            самых благополучных стран в мире. Уровень доходов выше среднего, а
            социальная защита, включая
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Качество образования: Нидерланды известны своей высококачественной
            системой образования. Университеты и другие учебные заведения
            предлагают широкий спектр программ на различных языках, в том числе
            на английском, что делает их привлекательными для студентов со всего
            мира.
          </h1>
          <img src={ned2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ned2img4} alt="" />
          <h1>
            Работа и экономика: Нидерланды имеют динамичную и разнообразную
            экономику, предлагающую много возможностей для работы и развития
            карьеры. Страна известна своими инновационными отраслями, такими как
            высокие технологии, энергетика и здравоохранение.
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

export default Netherlands2;
