import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userInfo, userUnlock, userupdate } from "../redux/userSlice";
import { useLocation } from "react-router-dom";
import "./Info.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { selectUser, clearState } from "../redux/userSlice";
import { selectLuck } from "../redux/luckSlice";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Record from "../components/Record";
import _ from "lodash";
import Readmode from "../components/Readmode";
import Editmode from "../components/Editmode";
import Adduser from "../components/Adduser";

const Info = (props) => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const [mode, setMode] = React.useState("Readmode");

  const { user, records, isFetching, isSuccess } = useSelector(selectUser);
  const lockList = useSelector((state) => state.Luck.Lock);
  useEffect(() => {
    dispatch(clearState());
    dispatch(userInfo(location.state));
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  console.log(lockList);
  return (
    <div id="Info">
      <div className="info__back">
        <button className="pre-page" onClick={handleClick}>
          <img src="./chevron.png" alt="" />
        </button>
      </div>
      <div className="info__section">
        <div className="section-base">
          <div className="base lock">
            {/* {lockList[location.state].lockUp === 1 ? <LockIcon /> : <LockOpenIcon />} */}

            {isFetching ? (
              <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
            ) : (
              <h1>置物櫃 - {location.state}</h1>
            )}
          </div>
          <div className="base state" style={{ display: "flex" }}>
            {isFetching ? (
              <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
            ) : user.id !== undefined ? (
              <CheckCircleIconStyle />
            ) : (
              <AccessTimeFilledIconStyle />
            )}
          </div>
          <div className="basemode">
            {user.id === undefined && mode !== "Editmode" ? (
              <Adduser setMode={setMode} />
            ) : mode === "Readmode" && user.id !== undefined ? (
              <Readmode setMode={setMode} />
            ) : (
              <Editmode setMode={setMode} />
            )}
          </div>

          {/* <div>
            <TextField
              id="standard-read-only-input"
              defaultValue={user.email !== undefined ? user.email : "沒有信箱"}
              InputProps={{
                readOnly: userInfoEdit,
                disableUnderline: userInfoUnderline,
              }}
              variant="standard"
            />
          </div>  */}
        </div>
        <div className="section-record">
          <p className="record title">操作紀錄</p>
          <div className="record panel">
            {isFetching ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={64}
                  sx={{ margin: "0 0 10px 0", borderRadius: "8px" }}
                />
                <Skeleton
                  variant="circular"
                  width={10}
                  height={10}
                  sx={{ margin: "5px" }}
                />
                <Skeleton
                  variant="circular"
                  width={10}
                  height={10}
                  sx={{ margin: "5px" }}
                />
                <Skeleton
                  variant="circular"
                  width={10}
                  height={10}
                  sx={{ margin: "5px" }}
                />
              </Box>
            ) : (
              <div>
                {_.map(records, (item, index) => (
                  <Record
                    name={item.name}
                    record={item.time}
                    lucknum={location.state}
                    description={item.description}
                    permission={item.permission}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIconStyle = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckCircleIcon style={{ color: "green", padding: "0px 8px 0px 0px" }} />
      <h2>狀態：目前為使用中</h2>
    </div>
  );
};
const AccessTimeFilledIconStyle = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AccessTimeFilledIcon
        style={{ color: "grey", padding: "0px 8px 0px 0px" }}
      />
      <h2>狀態：目前為閒置中</h2>
    </div>
  );
};

export default Info;
