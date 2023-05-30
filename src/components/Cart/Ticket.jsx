import React from "react";
import "./Ticket.css";

const Ticket = () => {
  
  return (
    <div className="ticket__container">
      <div className="ticket__purchase">
        <h1>BUYNING TICKETS</h1>
        <div className="ticket__left">
          <div className="block__inputs">
            <h3>Name</h3>
            <input type="text" placeholder="Dwayne" />
          </div>
          <div className="block__inputs">
          <h3>Surname</h3>
            <input type="text" placeholder="Johnson" />
          </div>
        </div>
        <div className="ticket__right">
          <div className="block__inputs">
          <h3>Mail</h3>
            <input type="text" placeholder="mail@gmail.com" />
          </div>
          <div className="block__inputs">
          <h3>Phone</h3>
            <input type="text" placeholder="+996 555 555 555" />
          </div>
        </div>
      </div>

      <div className="ticket__payment">
        <h1>PAYMENT</h1>
        <div className="payment__left">
          <div className="block__inputs">
            <h3>Card number</h3>
            <input type="text" placeholder="1234 1234 1234 1234" />
          </div>
          <div className="block__inputs">
            <h3>Cardholder Name</h3>
            <input type="text" placeholder="Michele" />
          </div>
        </div>
        <div className="payment__right">
          <div className="block__inputs">
            <h3>Validity</h3>
            <input type="text" placeholder="11" />
          </div>
          <div className="block__inputs">
            <h3>CVV</h3>
            <input type="text" placeholder="11" />
          </div>
        </div>
        <button>Оплатить</button>
      </div>
    </div>
  );
};

export default Ticket;
