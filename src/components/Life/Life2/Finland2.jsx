import React from "react";
import "../Life2/stylesLife2/Finland2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import fin2img1 from "../../../assets/fin2img1.jpg";
import fin2img2 from "../../../assets/fin2img2.jpg";
import fin2img3 from "../../../assets/fin2img3.jpg";
import fin2img4 from "../../../assets/fin2img4.jpg";

const Finland2 = () => {
  return (
    <>
      <div className="glav_fin2">
        <div className="sod1_swi2">
          <img src={fin2img1} alt="" />
          <h1>
            Финляндия <tr /> Финляндия - это страна в Северной Европе,
            расположенная на северо-западе России, с соседями, такими как Швеция
            и Норвегия. Финляндия известна своей уникальной природой, с
            прекрасными озерами, лесами, северными сияниями и заснеженными
            ландшафтами.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={fin2img2} alt="" />
          <h1>
            Образование: Финляндия известна своей высококачественной системой
            образования. Она имеет одну из лучших систем образования в мире,
            включая бесплатное высшее образование для студентов из стран
            Европейского союза. Это делает Финляндию привлекательной для
            молодежи, которая ищет высокое качество образования.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Социальная защита: Финляндия имеет развитую систему социальной
            защиты, которая обеспечивает широкий спектр социальных льгот и
            поддержку. Это включает в себя доступ к медицинскому обслуживанию,
            пенсиям, пособиям по безработице и детским пособиям. Это особенно
            важно для пенсионеров и людей, которые нуждаются в социальной
            поддержке.
          </h1>
          <img src={fin2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={fin2img4} alt="" />
          <h1>
            Качество жизни: Финляндия имеет высокий уровень жизни и признана
            одной из самых счастливых стран в мире. Она предлагает высокий
            уровень безопасности, чистую окружающую среду, доступ к природе и
            возможности для активного отдыха. Финские города также известны
            своим культурным разнообразием и богатством культурных мероприятий.
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

export default Finland2;
