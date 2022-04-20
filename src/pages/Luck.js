import React from "react";
import "./Luck.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LuckStatus, selectLuck } from "../redux/luckSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Lock";


const Luck = ({ state }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LuckStatus());

  }, []);


  useSelector(selectLuck);
  // const lockList = useSelector((state => state.luckNo))
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Info");
  };

  return (
    <div id="Luck">
      <div className="status">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 160,
              height: 164,
              borderRadius: "10%",
              borderColor: "#000000",
              border: "1px solid ",
            },
          }}
        >
          <Paper className="p" elevation={0}>
            <div className="cir">
              <CircleIcon
                sx={{ color: "#363F4E", height: "20px", width: "20px" }}
              ></CircleIcon>
              使用中
            </div>
            <div className="cir">
              <CircleIcon
                sx={{ color: "#000000", height: "20px", width: "20px" }}
              ></CircleIcon>
              可使用
            </div>
            <div className="cir">
              <CircleIcon
                sx={{ color: "#FF5A5A", height: "20px", width: "20px" }}
              ></CircleIcon>
              異常&ensp;{" "}
            </div>
          </Paper>
        </Box>
      </div>
      <div className="luck__title" >置物櫃當前使用狀態</div>
      <div style={{ width: 770 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          <Item></Item>
        </Box>
        </div>
      </div>
    </div>
  );
};

export default Luck;
