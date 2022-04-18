import React from "react";
import "./Info.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="Info">
      <div className="info__back">
        <button className="pre-page" onClick={handleClick}>
          <img src="./chevron.png" alt="" />
        </button>
      </div>
      <div className="info__section">
        <div className="section-base">
          <div className="base lock">
            <img src="./lock.png" alt="" />
            <h1>所選鎖櫃編號：lock</h1>
          </div>
          <div className="base state">
            <h2>狀態：目前為state</h2>
          </div>
          <div className="base name">
            <img src="./name.png" alt="" />
            <p>username</p>
          </div>
          <div className="base card">
            <img src="./card.png" alt="" />
            <p>4856565475</p>
          </div>
          <div className="base phone">
            <img src="./phone.png" alt="" />
            <p>0987654321</p>
          </div>
          <div className="base mail">
            <img src="./mail.png" alt="" />
            <p>000@example.com</p>
          </div>
          <div className="control-btn">
            <Button
              variant="contained"
              style={{
                width: "80%",
                height: 39,
                background: "#FFC440",
                boxShadow: "none",
                fontSize: 18,
                margin: 5,
              }}
            >
              強制開鎖
            </Button>
            <Button
              variant="contained"
              style={{
                width: "80%",
                height: 39,
                background: "#A0A0A0",
                boxShadow: "none",
                fontSize: 18,
                margin: 5,
              }}
            >
              編輯基本資訊
            </Button>
          </div>
        </div>
        <div className="section-record">2</div>
      </div>
    </div>
  );
};

export default Info;
