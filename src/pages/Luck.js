import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuckStatus, selectLuck } from "../redux/luckSlice";
import { useSelector, useDispatch } from "react-redux";

import "./Luck.css";
import Item from "../components/Lock";
import _ from "lodash";

import { Box, Paper, Skeleton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

const Luck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LuckStatus());
  }, []);
  const lockList = useSelector((state) => state.Luck.Lock);
  useSelector(selectLuck);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Info?No=" + e.target.innerText, { state: e.target.innerText });
    console.log(e.target.innerText);
  };
  const handleClickStop = (e) => {
    e.preventDefault();
  };
  const { isFetching } = useSelector(selectLuck);
  let array = new Array(42);
  return (
    <div id="Luck">
      <div className="luck__title">置物櫃當前使用狀態</div>
      <div className="luck__container">
        <div className="status-none">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: 128,
                height: 176,
                borderRadius: "10%",
                borderColor: "#000000",
                border: "1px solid ",
              },
            }}
          >
            <Paper className="p" elevation={0}></Paper>
          </Box>
        </div>
        <div className="luck__section">
          {isFetching ? (
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
            >
              {_.map(array, (item, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={80}
                  height={80}
                  sx={{ margin: "5px 5px 5px 5px", borderRadius: "12%" }}
                />
              ))}
            </Box>
          ) : (
            <div className="luck__btn" style={{ width: " 100 %" }}>
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
              >
                {_.map(lockList, (item, index) => (
                  <Item
                    key={index}
                    onClick={
                      item.lockerNo !== null
                        ? (e) => handleClick(e)
                        : (e) => handleClickStop
                    }
                    sx={{
                      cursor: item.lockerNo !== null ? "pointer" : "",
                      position: "relative",
                      background:
                        item.error === 1
                          ? "#FF5A5A"
                          : item.userId !== null
                          ? "#363F4E"
                          : "#FFFFFF",
                      color:
                        item.error !== 1
                          ? item.userId !== null
                            ? "#FFFFFF"
                            : "#000000"
                          : "#FFFFFF",
                      border:
                        item.error !== 1
                          ? item.userId !== null
                            ? "none"
                            : item.lockerNo === null
                            ? "1px dashed"
                            : "1px solid #000"
                          : item.userId !== null
                          ? "none"
                          : "#363F4E",
                    }}
                  >
                    {item.lockerNo}
                    {item.userId !== null && item.lockUp === 1 ? (
                      <LockIcon
                        sx={{
                          position: "absolute",
                          top: "10px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                    {item.userId !== null && item.lockUp === 0 ? (
                      <LockOpenIcon
                        sx={{
                          position: "absolute",
                          top: "8px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Item>
                ))}
              </Box>
            </div>
          )}
        </div>
        <div className="status">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: 128,
                height: 176,
                borderRadius: "10%",
                borderColor: "#000000",
                border: "1px solid ",
              },
            }}
          >
            <Paper className="p" elevation={0}>
              <div className="cir">
                <LockOpenIcon
                  sx={{
                    color: "#363F4E",
                    height: "16px",
                    width: "16px",
                  }}
                ></LockOpenIcon>
                開啟中
              </div>
              <div className="cir">
                <LockIcon
                  sx={{
                    color: "#363F4E",
                    height: "16px",
                    width: "16px",
                  }}
                ></LockIcon>
                關閉中
              </div>
              <div className="cir">
                <CircleIcon
                  sx={{
                    color: "#363F4E",
                    height: "16px",
                    width: "16px",
                  }}
                ></CircleIcon>
                使用中
              </div>
              <div className="cir">
                <CircleIcon
                  sx={{
                    color: "#FFFFFF",
                    border: "1px solid #C4C4C4",
                    // borderRadius: "50%",
                    height: "16px",
                    width: "16px",
                  }}
                ></CircleIcon>
                可使用
              </div>
              <div className="cir">
                <CircleIcon
                  sx={{
                    color: "#FF5A5A",
                    height: "16px",
                    width: "16px",
                  }}
                ></CircleIcon>
                異常&ensp;{" "}
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Luck;
