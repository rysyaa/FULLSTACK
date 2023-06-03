import React from "react";
import "./Main.css";
import "./MainMedia.css";
import mainvideo1 from "../../video/mainvideo1.mp4";
import mainvideo2 from "../../video/mainvideo2.mp4";
import mainvideo3 from "../../video/mainvideo3.mp4";
import mainvideo4 from "../../video/mainvideo4.mp4";
import mainvideo5 from "../../video/mainvideo5.mp4";
import mainlogo from "../../assets/mainlogo2.png";
import shopTickets from "../../assets/shopTickets.png"
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main_components">
        <div className="main_world">
          <h1
            style={{
              fontSize: "40px",
            }}
          >
            KNOW THE WORLD
          </h1>
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
            <Link to="/shop">
            <button> <img style={{width: "2vw"}} src={shopTickets} alt="" /> BUY TICKETS</button>
            </Link>
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
          <Link to="/jap2">
            <h2>JAPAN</h2>
          </Link>
        </div>
        <div className="tours_greece">
          <Link to="/gre2">
            <h2>GREECE</h2>
          </Link>
        </div>
        <div className="tours_uae">
          <Link to="/uae2">
            <h2>UAE</h2>
          </Link>
        </div>
        <div className="tours_norway">
          <Link to="/nor2">
            <h2>NORWAY</h2>
          </Link>
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
            <Link to="/sweden">
              <h2>SWEDEN</h2>
            </Link>
          </div>
          <div className="tours_nider">
            <Link to="/nether">
              <h2>NIDERLANDS</h2>
            </Link>
          </div>
          <div className="tours_iseland">
            <Link to="/ice">
              <h2>ICELAND</h2>
            </Link>
          </div>
          <div className="tours_germany">
            <Link to="/ger">
              <h2>GERMANY</h2>
            </Link>
          </div>
          <div className="tours_fynland">
            <Link to="fin">
              <h2>FYNLAND</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_video2">
        <video autoPlay loop muted>
          <source src={mainvideo2} type="video/mp4" />
        </video>
        <div className="overlay2">
          <h1>BEST COUNTRIES TO TRAVAL</h1>
          <Link to="/chil">
            <button>EXPORT NOW</button>
          </Link>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_norway">
            <Link to="nor">
              <h2>NORWAY</h2>
            </Link>
          </div>
          <div className="tours_georgia">
            <Link to="/geor">
              <h2>GEORGIA</h2>
            </Link>
          </div>
          <div className="tours_india">
            <Link to="/ind">
              <h2>INDIA</h2>
            </Link>
          </div>
          <div className="tours_italy">
            <Link to="/ita">
              <h2>ITALY</h2>
            </Link>
          </div>
          <div className="tours_japan2">
            <Link to="/jap">
              <h2>JAPAN</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_video3">
        <video autoPlay loop muted>
          <source src={mainvideo3} type="video/mp4" />
        </video>
        <div className="overlay3">
          <h1>BEST COUNTRIES TO HOLIDAYS</h1>
          <Link to="/journey">
            <button>EXPORT NOW</button>
          </Link>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_turkey">
            <Link to="/tur">
              <h2>TURKEY</h2>
            </Link>
          </div>
          <div className="tours_cyprus">
            <Link to="/cyp">
              <h2>CYPRUS</h2>
            </Link>
          </div>
          <div className="tours_uae2">
            <Link to="/uae">
              <h2>UAE</h2>
            </Link>
          </div>
          <div className="tours_thailand">
            <Link to="/thi">
              <h2>THAILAND</h2>
            </Link>
          </div>
          <div className="tours_greece2">
            <Link to="/gre">
              <h2>GREECE</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_video4">
        <video autoPlay loop muted>
          <source src={mainvideo4} type="video/mp4" />
        </video>
        <div className="overlay4">
          <h1>BEST COUNTRIES TO STUDY</h1>
          <Link to="/work">
            <button>EXPORT NOW</button>
          </Link>
        </div>
      </div>
      <div className="tours_world">
        <div className="tours_world2">
          <div className="tours_anglia">
            <Link to="/ang">
              <h2>ANGLIA</h2>
            </Link>
          </div>
          <div className="tours_usa">
            <Link to="/usa">
              <h2>USA</h2>
            </Link>
          </div>
          <div className="tours_kanada">
            <Link to="/can">
              <h2>CANADA</h2>
            </Link>
          </div>
          <div className="tours_germany2">
            <Link to="ger">
              <h2>GERMANY</h2>
            </Link>
          </div>
          <div className="tours_avstraliya">
            <Link to="/aus">
              <h2>AUSTRALIA</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_video5">
        <video autoPlay loop muted>
          <source src={mainvideo5} type="video/mp4" />
        </video>
        <div className="overlay5">
          <h1>COUNTRIES WHICH IT IS BETTER NOT TO VISIT</h1>
          <Link to="/danger">
            <button>EXPORT NOW</button>
          </Link>
        </div>
      </div>
      <div className="tours_world last_tours">
        <div className="tours_world2">
          <div className="tours_salvador">
            <Link to="/sal">
              <h2>SALVADOR</h2>
            </Link>
          </div>
          <div className="tours_venezuela">
            <Link to="/ven">
              <h2>VENEZUELA</h2>
            </Link>
          </div>
          <div className="tours_nigeria">
            <Link to="/nig">
              <h2>NIGERIA</h2>
            </Link>
          </div>
          <div className="tours_papua">
            <Link to="/pap">
              <h2>PAPUA</h2>
            </Link>
          </div>
          <div className="tours_afghanistan">
            <Link to="afg">
              <h2>AFGHANISTAN</h2>
            </Link>
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
