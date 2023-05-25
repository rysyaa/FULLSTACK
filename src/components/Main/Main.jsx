import React from "react";
import "./Main.css";
import "./MainMedia.css";
import mainvideo1 from "../../video/mainvideo1.mp4";
import mainvideo2 from "../../video/mainvideo2.mp4";
import mainvideo3 from "../../video/mainvideo3.mp4";
import mainvideo4 from "../../video/mainvideo4.mp4";
import mainvideo5 from "../../video/mainvideo5.mp4";
import mainlogo from "../../assets/mainlogo2.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main_components">
        <div className="main_world">
          <h1>KNOW THE WORLD</h1>
          <h3>WITH US</h3>
        </div>
        <div className="main_world2">
          <div className="main_country">
            <h3>COUNTRY</h3>
            <h5>where do you wont</h5>
          </div>
          <div className="main_date">
            <h3>DATE</h3>
            <h5>when do you wont</h5>
          </div>
          <div className="main_guest">
            <h3>GUEST</h3>
            <h5>where do you going</h5>
          </div>
          <div className="main_btn">
            <button>EXPLORE NOW</button>
          </div>
        </div>
      </div>
      <div className="tours_components">
        <div className="tours_world">
          <h1>POPULAR TOURS</h1>
        </div>
      </div>
      <div
        style={{ paddingTop: "4em", paddingBottom: "1em" }}
        className="tours_world2"
      >
        <div className="tours_japan">
          <h2>JAPAN</h2>
        </div>
        <div className="tours_greece">
          <h2>GREECE</h2>
        </div>
        <div className="tours_uae">
          <h2>UAE</h2>
        </div>
        <div className="tours_norway">
          <h2>NORWAY</h2>
        </div>
      </div>
      <div className="main_video1">
        <video autoPlay loop muted>
          <source src={mainvideo1} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>BEST COUNTRIES TO LIVE</h1>
          <Link to="/life">
            <button>EXPORT NOW</button>
          </Link>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_sweden">
            <h2>SWEDEN</h2>
          </div>
          <div className="tours_nider">
            <h2>NIDERLANDS</h2>
          </div>
          <div className="tours_iseland">
            <h2>ICELAND</h2>
          </div>
          <div className="tours_germany">
            <h2>GERMANY</h2>
          </div>
          <div className="tours_fynland">
            <h2>FYNLAND</h2>
          </div>
        </div>
      </div>
      <div className="main_video2">
        <video autoPlay loop muted>
          <source src={mainvideo2} type="video/mp4" />
        </video>
        <div className="overlay2">
          <h1>BEST COUNTRIES TO TRAVAL</h1>
          <button>EXPORT NOW</button>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_norway">
            <h2>NORWAY</h2>
          </div>
          <div className="tours_georgia">
            <h2>GEORGIA</h2>
          </div>
          <div className="tours_india">
            <h2>INDIA</h2>
          </div>
          <div className="tours_italy">
            <h2>ITALY</h2>
          </div>
          <div className="tours_japan2">
            <h2>JAPAN</h2>
          </div>
        </div>
      </div>
      <div className="main_video3">
        <video autoPlay loop muted>
          <source src={mainvideo3} type="video/mp4" />
        </video>
        <div className="overlay3">
          <h1>BEST COUNTRIES TO HOLIDAYS</h1>
          <button>EXPORT NOW</button>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_turkey">
            <h2>TURKEY</h2>
          </div>
          <div className="tours_cyprus">
            <h2>CYPRUS</h2>
          </div>
          <div className="tours_uae2">
            <h2>UAE</h2>
          </div>
          <div className="tours_thailand">
            <h2>THAILAND</h2>
          </div>
          <div className="tours_greece2">
            <h2>GREECE</h2>
          </div>
        </div>
      </div>
      <div className="main_video4">
        <video autoPlay loop muted>
          <source src={mainvideo4} type="video/mp4" />
        </video>
        <div className="overlay4">
          <h1>BEST COUNTRIES TO STUDY</h1>
          <button>EXPORT NOW</button>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_anglia">
            <h2>ANGLIA</h2>
          </div>
          <div className="tours_usa">
            <h2>USA</h2>
          </div>
          <div className="tours_kanada">
            <h2>KANADA</h2>
          </div>
          <div className="tours_germany2">
            <h2>GERMANY</h2>
          </div>
          <div className="tours_avstraliya">
            <h2>AVSTRALIYA</h2>
          </div>
        </div>
      </div>
      <div className="main_video5">
        <video autoPlay loop muted>
          <source src={mainvideo5} type="video/mp4" />
        </video>
        <div className="overlay5">
          <h1>COUNTRIES WHICH IT IS BETTER NOT TO VISIT</h1>
          <button>EXPORT NOW</button>
        </div>
      </div>
      <div className="tours_world last_tours">
        <div className="tours_world2">
          <div className="tours_salvador">
            <h2>SALVADOR</h2>
          </div>
          <div className="tours_venezuela">
            <h2>VENEZUELA</h2>
          </div>
          <div className="tours_nigeria">
            <h2>NIGERIA</h2>
          </div>
          <div className="tours_papua">
            <h2>PAPUA</h2>
          </div>
          <div className="tours_afghanistan">
            <h2>AFGHANISTAN</h2>
          </div>
        </div>
      </div>
      {/* footer--------------- */}
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
    </>
  );
};

export default Main;
