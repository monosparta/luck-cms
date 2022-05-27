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
import RefreshIcon from "@mui/icons-material/Refresh";

const Luck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(LuckStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(LuckStatus());
  //     console.log("Hello!");
  //   }, 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { isFetching, Lock } = useSelector(selectLuck);

  const handleClick = (e) => {
    navigate("/Info?No=" + e.target.innerText, { state: e.target.innerText });
  };

  const handleClickStop = (e) => {
    e.preventDefault();
  };

  let loadingArray = new Array(42);

  return (
    <div id="Luck">
      <div className="luck__title">
        置物櫃當前使用狀態
        <RefreshIcon />
      </div>
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
              {_.map(loadingArray, (item, index) => (
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
                {_.map(Lock, (item, index) => (
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
                          top: "5px",
                          right: "5px",
                          height: "16px",
                          width: "16px",
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
                          right: "5px",
                          height: "16px",
                          width: "16px",
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
                    color: "#C4C4C4",
                    borderRadius: "50%",
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

const Available = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#363F4E",
        border: "1px solid #000",
        cursor: "pointer",
      }}
    ></div>
  );
};

const unAvailable = () => {
  return (
    <div
      style={{
        background: "#FF5A5A",
        color: "#FFFFFF",
        border: "1px solid #000",
        cursor: "pointer",
      }}
    ></div>
  );
};

const Block = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px dashed",
      }}
    ></div>
  );
};

const Locked = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#363F4E",
        border: "1px solid #000",
        cursor: "pointer",
      }}
    >
      <LockIcon
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          height: "16px",
          width: "16px",
        }}
      />
    </div>
  );
};

const unLocked = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#363F4E",
        border: "1px solid #000",
      }}
    >
      <LockOpenIcon
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          height: "16px",
          width: "16px",
        }}
      />
    </div>
  );
};
export default Luck;
