import React from "react";
import "./Record.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Record = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        // expanded={expanded === "panel1"}
        // onChange={handleChange("panel1")}
        sx={{
          marginBottom: 2,
          border: "1px solid black",
          boxShadow: "none",
          borderRadius: "4px",
        }}
      >
        <AccordionSummary
          sx={{ height: 64 }}
          //   expandIcon={<ExpandMoreIcon />}
          //   aria-controls="panel1bh-content"
          //   id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Username</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            於 03/21(一) 17:08:20 關閉第 12 櫃
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            border: "1px solid black",
            borderRadius: "4px",
            margin: 2,
          }}
        >
          <Typography>詳細</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Record;
