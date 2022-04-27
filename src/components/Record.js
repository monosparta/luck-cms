import React from "react";
import "./Record.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
const Record = (props) => {
  return (
    <div>
      {props.permission !== 0 ? (
        <Box
          sx={{
            marginBottom: "16px",
            border: "1px solid black",
            boxShadow: "none",
            borderRadius: "4px",
          }}
        >
          <AccordionSummary sx={{ height: 64 }}>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              於 {props.record} 關閉第 {props.lucknum} 櫃
            </Typography>
          </AccordionSummary>
        </Box>
      ) : (
        <div className="record-box">
          <Accordion
            sx={{
              border: "1px solid black",
              boxShadow: "none",
              borderRadius: "4px",
            }}
          >
            <AccordionSummary
              sx={{ height: 64 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                管理員 - {props.name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                於 {props.record} 強制開啟 {props.lucknum} 櫃
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                border: "1px solid black",
                borderRadius: "4px",
                margin: 2,
              }}
            >
              <Typography>{props.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Record;
