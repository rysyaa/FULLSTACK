import React from "react";
import AddPeople from "./AddPeople";
import "../Cart/Register.css";
import mainvideo1 from "../../video/mainvideo1.mp4";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main_video10">
        <video autoPlay loop muted>
          <source src={mainvideo1} type="video/mp4" />
        </video>
        <div className="overlayreg">
          <h1>REGISTER FOR FREE ACCOUNT</h1>
          <div className="reg_input">
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="PASSWORD" />
          </div>
          <button onClick={() => navigate("/")}>CREATE ACCOUNT</button>
        </div>
      </div>
    </>
  );
};

export default Registration;
