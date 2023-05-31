import React from "react";
import "./stylesDanger2/Salvador2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import sal2img1 from "../../../assets/sal2img1.jpg";
import sal2img2 from "../../../assets/sal2img2.jpg";
import sal2img3 from "../../../assets/sal2img3.jpg";

const Salvador2 = () => {
  return (
    <>
      {" "}
      <div className="glav_sal2">
        <div className="sod1_swi2">
          <img src={sal2img1} alt="" />
          <h1>
            Сальвадор <tr /> Сальвадор - страна в Центральной Америке, которая
            имеет определенные проблемы с безопасностью. Вот некоторые факторы,
            которые могут считаться опасными и причинами, по которым некоторые
            люди рекомендуют избегать посещения Сальвадора:
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={sal2img2} alt="" />
          <h1>
            Преступность: Сальвадор имеет один из самых высоких уровней
            преступности в мире. В городах часто встречаются разбойные
            нападения, грабежи и насилие. Воры и карманники могут быть особенно
            активными в туристических районах, а также на общественном
            транспорте и в толпе.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Наркотрафик: Сальвадор находится на пути наркотрафикантов, и этот
            незаконный бизнес может создавать напряженную обстановку в стране.
            Возможно присутствие наркокартелей и других преступных группировок,
            что может привести к увеличению насилия и конфликтов.
          </h1>
          <img src={sal2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={sal2img1} alt="" />
          <h1>
            Банды: Сальвадор известен присутствием различных банд, таких как
            "Мара-Сальватруча" и "Баррио-18". Эти банды занимаются насилием,
            эксторсией, наркоторговлей и другими преступными деяниями. Внимание
            к их территориям может привлечь опасность и повысить риск стать
            жертвой насилия.
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

export default Salvador2;
