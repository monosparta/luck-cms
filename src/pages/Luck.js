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
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Luck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LuckStatus());
  }, []);
  const lockList = useSelector((state) => state.Luck.Lock);
  useSelector(selectLuck);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Info" + "?" + e.target.innerText, { state: e.target.innerText });
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
      {isFetching ? (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {_.map(array, (item, index) => (
            <Skeleton
              variant="rectangular"
              width={100}
              height={100}
              sx={{ margin: "10px 5px 10px 5px", borderRadius: "12%" }}
            />
          ))}
        </Box>
      ) : (
        <div className="luck__btn" style={{ width: 770 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {_.map(lockList, (item, index) => (
              <Item
                onClick={
                  item.lockerNo !== null
                    ? (e) => handleClick(e)
                    : (e) => handleClickStop
                }
                sx={{
                  cursor: item.lockerNo !== null ? "pointer" : "",
                  position: "relative",
                  background: item.userId !== null ? "#363F4E" : "#FFFFFF",
                  // background: item.error === 1 ? "#FF5A5A" : "#FFFFFF",
                  color: item.userId !== null ? "#FFFFFF" : "#000000",
                  border:
                    item.userId !== null
                      ? "none"
                      : item.lockerNo === null
                        ? "1px dashed"
                        : "1px solid #000",
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
          <div className="status">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: 160,
                  height: 220,
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
                      height: "20px",
                      width: "20px",
                    }}
                  ></LockOpenIcon>
                  開啟中
                </div>
                <div className="cir">
                  <LockIcon
                    sx={{
                      color: "#363F4E",
                      height: "20px",
                      width: "20px",
                    }}
                  ></LockIcon>
                  關閉中
                </div>
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
                      color: "#FFFFFF",
                      border: "1px solid #C4C4C4",
                      // borderRadius: "50%",
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
        </div>
      )}
    </div>
  );
};

export default Luck;
