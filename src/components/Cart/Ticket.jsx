import React from "react";
import "./Ticket.css";

const Ticket = () => {
  return (
    <div className="ticket__container">
      <div className="ticket__countries">
        <div className="sec1">
          <h1>Страна</h1>
          <section>
            <select>
              <option value="" disabled selected hidden>
                Выберите
              </option>
              <option value="">1 страна снг</option>
              <option value="">2 страна снг</option>
              <option value="">3 страна снг</option>
              <option value="">4 страна снг</option>
              <option value="">5 страна снг</option>
            </select>
          </section>
        </div>
        <div className="sec2">
          <h1>Город</h1>
          <section>
            <select>
              <option value="" disabled selected hidden>
                Выберите
              </option>
              <option value="">1 страна из сайта</option>
              <option value="">2 страна из сайта</option>
              <option value="">3 страна из сайта</option>
            </select>
          </section>
        </div>
      </div>

      <div className="ticket__purchase">
        <h1>Покупка билетов</h1>
        <section>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Телефон" />
          <input type="text" placeholder="Количество билетов" />
        </section>
      </div>

      <div className="ticket__payment">
        <h1>Оплата</h1>
        <section>
          <input type="text" placeholder="Номер карты" />
          <input type="text" placeholder="Имя владельца карты" />
          <input type="text" placeholder="Срок действия" />
          <input type="text" placeholder="CVV" />
        </section>
        <button>Оплатить</button>
      </div>
    </div>
  );
};

export default Ticket;
