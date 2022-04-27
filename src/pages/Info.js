import React from "react";
import "./Info.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userInfo, userUnlock } from "../redux/userSlice";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { selectUser, clearState } from "../redux/userSlice";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Record from "../components/Record";
import _ from "lodash";
import Readmode from "../components/Readmode";
import Editmode from "../components/Editmode";

const Info = (props) => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const [userInfoEdit, setUserInfoEdit] = React.useState(true);
  const [userInfoUnderline, setUserInfoUnderline] = React.useState(true);

  const { user, records, isFetching, isSuccess } = useSelector(selectUser);

  useEffect(() => {
    dispatch(clearState());
    dispatch(userInfo(location.state));
  }, []);

  const unlock = () => {
    dispatch(userUnlock(user.cardId, records.description));
  };
  const handleEdit = () => {
    setUserInfoEdit(!userInfoEdit);
  };

  const handleClick = () => {
    navigate("/");
  };

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
            <img src="./lock.png" alt="" />
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
            {userInfoEdit ? <Readmode /> : <Editmode />}
          </div>

          <Button
            onClick={handleEdit}
            variant="contained"
            style={{
              width: "72%",
              height: 39,
              background: "#A0A0A0",
              boxShadow: "none",
              fontSize: 18,
              margin: 5,
            }}
          >
            編輯基本資訊
          </Button>

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
