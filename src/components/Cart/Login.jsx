import React, { useState } from "react";
import "../Cart/Register.css";
import mainvideo1 from "../../video/mainvideo1.mp4";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, error, setError } = useAuth();

  function handleSave() {
    if (!username.trim() || !password.trim()) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      handleLogin(formData, username);
    }
  }

  // const navigate = useNavigate();

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
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="USERNAME"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="PASSWORD"
            />
          </div>
          <button onClick={handleSave}>CREATE ACCOUNT</button>
        </div>
      </div>
    </>
  );
};

export default Login;
