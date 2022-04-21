import React from "react";
import "./Luck.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect } from "react";
import { LuckStatus, selectLuck } from "../redux/luckSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Lock";
import _ from "lodash";
import { color } from "@mui/system";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

const Luck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LuckStatus());
  }, []);
  const lockList = useSelector((state) => state.Luck.Lock);
  useSelector(selectLuck);
  console.log(lockList, "hi");

  // const colorList = [
  //   { background: "#363F4E", color: "#FFFFFF" },
  //   { background: "#FF5A5A", color: "#FFFFFF" },

  // ];

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
                sx={{
                  color: "#363F4E",
                  height: "20px",
                  width: "20px",
                }}
              ></CircleIcon>
              使用中
            </div>
            <div className="cir">
              <CircleIcon
                sx={{
                  color: "#000000",
                  height: "20px",
                  width: "20px",
                }}
              ></CircleIcon>
              可使用
            </div>
            <div className="cir">
              <CircleIcon
                sx={{
                  color: "#FF5A5A",
                  height: "20px",
                  width: "20px",
                }}
              ></CircleIcon>
              異常&ensp;{" "}
            </div>
          </Paper>
        </Box>
      </div>
      <div className="luck__title">置物櫃當前使用狀態</div>

      <div style={{ width: 770 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {_.map(lockList, (item, index) => (
            <Item
              sx={{
                background: item.userId !== null ? "#363F4E" : "#FFFFFF",
                color: item.userId !== null ? "#FFFFFF" : "#000000",
                border: item.userId !== null ? "none" : "1px solid #000",
              }}
            >
              {item.userId !== null && item.lockUp === 1 ? (
                <LockIcon
                  sx={{
                    position: "relative",
                  }}
                />
              ) : (
                ""
              )}
              {item.userId !== null && item.lockUp === 0 ? (
                <LockOpenIcon
                  sx={{
                    position: "relative",
                  }}
                />
              ) : (
                ""
              )}
              {item.lockerNo}
            </Item>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Luck;
