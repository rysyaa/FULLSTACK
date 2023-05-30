import React from "react";
import "../Life2/stylesLife2/Iceland2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import ice2img1 from "../../../assets/ice2img1.jpg";
import ice2img2 from "../../../assets/ice2img2.jpg";
import ice2img3 from "../../../assets/ice2img3.jpg";
import ice2img4 from "../../../assets/ice2img4.jpg";

const Iceland2 = () => {
  return (
    <>
      <div className="glav_ice2">
        <div className="sod1_swi2">
          <img src={ice2img1} alt="" />
          <h1>
            Исландия <tr />
            Исландия - это островное государство, расположенное в Северной
            Атлантике. Она находится на северо-западе Европы и является самой
            крупной островной нации в Европе. Исландия известна своим уникальным
            природным ландшафтом, который включает в себя вулканы, ледники,
            гейзеры, водопады и горы.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={ice2img2} alt="" />
          <h1>
            Качество жизни: Исландия имеет высокий уровень жизни и занимает
            лидирующие позиции в международных рейтингах по качеству жизни. Она
            предлагает доступ к высококачественной медицинской помощи,
            образованию и социальной защите, что особенно важно для пенсионеров
            и людей трудоспособного возраста.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Безопасность: Исландия считается одной из самых безопасных стран в
            мире. Низкий уровень преступности и отсутствие серьезных угроз
            обеспечивают спокойную и безопасную среду для проживания. Природа и
            экология: Исландия славится своими красивыми
          </h1>
          <img src={ice2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={ice2img4} alt="" />
          <h1>
            Природа и экология: Исландия славится своими красивыми природными
            ландшафтами, включая водопады, вулканы, гейзеры, ледники и
            термальные источники. Это создает возможности для активного отдыха и
            занятий экотуризмом, что особенно привлекательно для молодежи и
            людей, ценящих природу.
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

export default Iceland2;
