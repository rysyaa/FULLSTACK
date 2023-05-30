import React from "react";
import "./stylesJourney2/Georgia2.css";
import mainlogo from "../../../assets/mainlogo2.png";
import geo2img1 from "../../../assets/geo2img1.png";
import geo2img2 from "../../../assets/geo2img2.jpg";
import geo2img3 from "../../../assets/geo2img3.jpg";
import geo2img4 from "../../../assets/geo2img4.jpg";
const Georgia2 = () => {
  return (
    <>
      {" "}
      <div className="glav_geo2">
        <div className="sod1_swi2">
          <img src={geo2img1} alt="" />
          <h1>
            Грузия <tr /> Грузия - это небольшая страна, расположенная на
            пересечении Европы и Азии, на южном склоне Кавказских гор. Она
            граничит с Россией, Турцией, Арменией и Азербайджаном. Грузия
            обладает уникальной культурой, богатым историческим наследием,
            прекрасной природой и гостеприимным народом.
          </h1>
        </div>
        <div className="sod2_swi2">
          <img src={geo2img2} alt="" />
          <h1>
            Тбилиси: Столица Грузии, Тбилиси, является смесью современной
            архитектуры и древних улочек. Одной из главных
            достопримечательностей города является Старый город с его узкими
            улочками, красочными фасадами и древними церквями. Здесь можно
            посетить Фортресса Нарикала, Метехискую церковь, Рождественскую
            церковь и прогуляться по проспекту Руставели.
          </h1>
        </div>
        <div className="sod3_swi2">
          <h1>
            Мцхета: Этот исторический город был одной из старейших столиц Грузии
            и является важным культурным и религиозным центром. В Мцхете вы
            можете посетить Свято-Георгиевский монастырь, Светицховели - одну из
            самых известных грузинских церквей, а также древние храмы и
            крепости.
          </h1>
          <img src={geo2img3} alt="" />
        </div>
        <div className="sod4_swi2">
          <img src={geo2img4} alt="" />
          <h1>
            Казбеги: Расположенный в Кавказских горах, Казбеги (также известный
            как Сванетия) предлагает потрясающие пейзажи и возможности для
            горных походов. Здесь вы найдете гору Казбек, храм Гергети, деревню
            Ушгули и другие прекрасные места.
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

export default Georgia2;
