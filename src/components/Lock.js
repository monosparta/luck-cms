import React from "react";
import Box from "@mui/material/Box";
import "./Lock.css";
import { selectLuck } from "../redux/luckSlice";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Item(props) {
  const { sx, ...other } = props;
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
      {...other}
    />
  );
}

// export default Item;
