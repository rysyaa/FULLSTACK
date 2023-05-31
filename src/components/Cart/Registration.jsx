import React, { useState } from "react";
import "../Cart/Register.css";
import mainvideo1 from "../../video/mainvideo1.mp4";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Registration = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState(0)
  const [passwordConfirm, setPasswordConfirm] = useState(0)

  const {handleRegister, error, setError} = useAuth();

  function handleSave(){
    if(!username.trim() || !email.trim() || !phone.trim() || !password.trim() || !passwordConfirm.trim()){
      alert("Заполните поля!");
      return;
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("passwordConfirm", passwordConfirm);
      handleRegister()
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="main_video10">
        <video autoPlay loop muted>
          <source src={mainvideo1} type="video/mp4" />
        </video>
        <div className="overlayreg">
          <h1>REGISTER FOR FREE ACCOUNT</h1>
          {error ? <h2>{error}</h2> : null}
          <div className="reg_input">
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="USERNAME" />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="EMAIL" />
            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="PHONE" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD" />
            <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" placeholder="PASSWORD_CONFIRM" />
          </div>
          <button onClick={handleSave}>CREATE ACCOUNT</button>
        </div>
      </div>
    </>
  );
};

export default Registration;
