import React, { useState } from "react";
import "./Ticket.css";
import { useBuy } from "../../context/BuyContextProvider";

const Ticket = () => {
  const { createBuyTickets } = useBuy();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCvv] = useState("");

  function sendingData() {
    if (
      !name.trim() ||
      !surname.trim() ||
      !mail.trim() ||
      !phone.trim() ||
      !cardNumber.trim() ||
      !cardholderName.trim() ||
      !validity.trim() ||
      !cvv.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("mail", mail);
      formData.append("phone", phone);
      formData.append("card_number", cardNumber);
      formData.append("cardholder_name", cardholderName);
      formData.append("validity", validity);
      formData.append("cvv", cvv);
      createBuyTickets(formData);
    }
  }

  return (
    <div className="ticket__container">
      <div className="ticket__purchase">
        <h1>BUYNING TICKETS</h1>
        <div className="ticket__left">
          <div className="block__inputs">
            <h3>Name</h3>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Dwayne"
            />
          </div>
          <div className="block__inputs">
            <h3>Surname</h3>
            <input
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              placeholder="Johnson"
            />
          </div>
        </div>
        <div className="ticket__right">
          <div className="block__inputs">
            <h3>Mail</h3>
            <input
              onChange={(e) => setMail(e.target.value)}
              type="text"
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="block__inputs">
            <h3>Phone</h3>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="+996 555 555 555"
            />
          </div>
        </div>
      </div>

      <div className="ticket__payment">
        <h1>PAYMENT</h1>
        <div className="payment__left">
          <div className="block__inputs">
            <h3>Card number</h3>
            <input
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="block__inputs">
            <h3>Cardholder Name</h3>
            <input
              onChange={(e) => setCardholderName(e.target.value)}
              type="text"
              placeholder="Michele"
            />
          </div>
        </div>
        <div className="payment__right">
          <div className="block__inputs">
            <h3>Validity</h3>
            <input
              onChange={(e) => setValidity(e.target.value)}
              type="text"
              placeholder="11"
            />
          </div>
          <div className="block__inputs">
            <h3>CVV</h3>
            <input onChange={(e) => setCvv(e.target.value)} type="text" placeholder="11" />
          </div>
        </div>
        <button onClick={sendingData}>Оплатить</button>
      </div>
    </div>
  );
};

export default Ticket;
