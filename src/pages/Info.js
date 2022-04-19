import React from "react";
import "./Info.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Info = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <div className="section-record">
          <p className="record title">操作紀錄</p>
          <div className="record panel">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  General settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  I am an accordion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Users
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  You are currently not an owner
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Personal data
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
