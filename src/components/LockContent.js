import React from "react";
import { selectLock } from "../redux/lockSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Item from "./Lock";
import _ from "lodash";

import { Box, Skeleton } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

const LockContent = () => {
  const navigate = useNavigate();

  const { isFetching, lockList } = useSelector(selectLock);

  const handleClick = (e) => {
    navigate("/Info?No=" + e.target.innerText, { state: e.target.innerText });
  };

  const handleClickStop = (e) => {
    e.preventDefault();
  };

  let loadingArray = new Array(42);
  return (
    <>
      {isFetching ? (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
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
        <div className="lockItem" style={{ width: " 100 %" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {_.map(lockList, (item, index) => (
              <Item
                key={index}
                onClick={
                  item.lockerNo !== null
                    ? (e) => handleClick(e)
                    : () => handleClickStop
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
    </>
  );
};

export default LockContent;
