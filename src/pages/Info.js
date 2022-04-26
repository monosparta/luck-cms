import React from "react";
import "./Info.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch } from "react-redux";
import { userInfo } from "../redux/userSlice";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { selectUser, clearState } from "../redux/userSlice";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Record from "../components/Record";
import _ from "lodash";
import Box from "@mui/material/Box";

const Info = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.state);
  const dispatch = useDispatch();

  const { user, records, isFetching } = useSelector(selectUser);
  useEffect(() => {
    dispatch(clearState());
    dispatch(userInfo(location.state));
  }, []);
  const handleClick = () => {
    navigate("/");
  };

  const [open, setOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [checkOpen, setCheckOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCheckOpen = () => {
    setCheckOpen(true);
    setOpen(false);
  };

  const handleCheckClose = () => {
    setCheckOpen(false);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 3000);
  };

  const CssTextField = styled(TextField)({
    "& .MuiFormHelperText-root": {
      "&.Mui-focused": {
        //提示文字
        color: "#02A2EE",
      },
    },
    "& label.Mui-focused": {
      //上排文字
      color: "#02A2EE",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#A0A0A0", //FIELD 框
      },
    },
  });
  return (
    <div id="Info">
      <div className="info__back">
        <button className="pre-page" onClick={handleClick}>
          <img src="./chevron.png" alt="" />
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "auto",
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: 440,
              height: 300, // Set your width here
            },
            "& .MuiOutlinedInput-root": {
              width: 328,
              height: 156, // Set your width here
            },
            "& .MuiDialogContent-root ": {
              padding: 0,
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          {"強制開鎖原因"}
        </DialogTitle>
        <div className="diacontent">
          <DialogContent sx={{ m: "0 auto", width: 328, height: 156 }}>
            <CssTextField
              required
              multiline
              id="input-reason"
              placeholder="請輸入提醒內容"
              inputProps={{
                style: {
                  width: 328,
                  height: 156,
                },
              }}
            />
          </DialogContent>
        </div>
        <DialogActions sx={{ width: 328 }}>
          <Button
            variant="contained"
            onClick={handleClickCheckOpen}
            style={{
              width: 108,
              height: 36,
              background: "#2F384F",
              boxShadow: "none",
              fontSize: 12,
              margin: 5,
            }}
          >
            提交
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            style={{
              width: 108,
              height: 36,
              background: "#fff",
              color: "#2F384F",
              boxShadow: "none",
              fontSize: 12,
              margin: 5,
              border: "1px solid #2F384F",
            }}
          >
            取消
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={checkOpen}
        onClose={handleCheckClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "auto",
          borderRadius: "10px",
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: 375,
              height: 250, // Set your width here
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              width: 244, // Set your width here
              height: 150,
            },
            "& .MuiDialogContent-root ": {
              padding: 0,
            },
            "& .MuiDialogActions-root ": {
              margin: "0 auto",
            },
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textAlign: "center", padding: "16px 24px 0 24px" }}
        >
          <div className="alert">
            <img src="./alert.png" alt="" className="alert" />
            <p>確定要執行強制開鎖的動作嗎？</p>
          </div>
        </DialogTitle>
        <DialogActions sx={{ width: 244 }}>
          <Button
            variant="contained"
            onClick={handleCheckClose}
            style={{
              width: 108,
              height: 36,
              background: "#2F384F",
              boxShadow: "none",
              fontSize: 12,
              margin: 5,
            }}
          >
            確認
          </Button>
          <Button
            variant="contained"
            onClick={handleCheckClose}
            style={{
              width: 108,
              height: 36,
              background: "#fff",
              color: "#2F384F",
              boxShadow: "none",
              fontSize: 12,
              margin: 5,
              border: "1px solid #2F384F",
            }}
          >
            取消
          </Button>
        </DialogActions>
      </Dialog>
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
          <div className="base name">
            <AccountCircleIcon style={{ fontSize: "30", margin: "8px 0" }} />
            {isFetching ? (
              <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
            ) : (
              <p>{user.name !== undefined ? user.name : "沒有使用者"}</p>
            )}
          </div>
          <div className="base card">
            <CreditCardIcon style={{ fontSize: "30", margin: "8px 0" }} />
            {isFetching ? (
              <Skeleton animation="wave" width={"60%"} sx={{ marginLeft: 1 }} />
            ) : (
              <p>{user.cardId}</p>
            )}
          </div>
          <div className="base phone">
            <PhoneAndroidIcon style={{ fontSize: "30", margin: "8px 0" }} />
            {isFetching ? (
              <Skeleton animation="wave" width={"40%"} sx={{ marginLeft: 1 }} />
            ) : (
              <p>{user.phone}</p>
            )}
          </div>
          <div className="base mail">
            <MailOutlineIcon style={{ fontSize: "30", margin: "8px 0" }} />
            {isFetching ? (
              <Skeleton animation="wave" width={"80%"} sx={{ marginLeft: 1 }} />
            ) : (
              <p>{user.email}</p>
            )}
          </div>
          <div className="control-btn">
            <Button
              variant="contained"
              onClick={handleClickOpen}
              style={{
                width: "80%",
                height: 39,
                background: "#FFC440",
                boxShadow: "none",
                fontSize: 18,
                margin: 5,
              }}
            >
              強制開鎖
            </Button>
            <Button
              variant="contained"
              style={{
                width: "80%",
                height: 39,
                background: "#A0A0A0",
                boxShadow: "none",
                fontSize: 18,
                margin: 5,
              }}
            >
              編輯基本資訊
            </Button>
          </div>
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
      <div>
        <Stack
          className="success"
          sx={{
            width: "478px",
            height: "52px",
            top: "107px",
            position: "absolute",
            right: "24px",
          }}
          spacing={2}
        >
          <Collapse in={alertOpen}>
            <Alert variant="filled" severity="success">
              已完成強制開鎖
            </Alert>
          </Collapse>
        </Stack>
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
