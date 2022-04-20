import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import "./Lock.css";

export default function Item(props) {
  const navigate = useNavigate();
  const { sx, ...other } = props;
  const handleClick = (e) => {
    navigate("/Info");
  }
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        background: "#FFF",
        color: "#000",
        fontWeight: "bold",
        borderRadius: "12%",
        border: "1px solid #000",
        fontSize: "25px",
        textAlign: "center",
        lineHeight: "100px",
        margin: "10px 5px 10px 5px",
        fontFamily: "Mulish",
        ...sx,
      }}
      onClick={(e) => handleClick(e)}
      {...other}
    />
  );
}


// export default Item;
