import React from "react";
import Collapse from "@mui/material/Collapse";
// import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { selectUser, clearState } from "../redux/userSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userInfo } from "../redux/userSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { userUnlock } from "../redux/userSlice";
import EditIcon from "@mui/icons-material/Edit";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { TextField, styled } from "@mui/material";

import "./Readmode.css";

const Readmode = (props) => {
  const [open, setOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [checkOpen, setCheckOpen] = React.useState(false);
  const [inputDescription, setInputDescription] = React.useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const [update, setUpdate] = React.useState(false);

  const { user, isFetching } = useSelector(selectUser);

  // useEffect(() => {
  //   dispatch(clearState());
  //   dispatch(userInfo(location.state));
  // }, []);

  const handleEdit = () => {
    props.setUserStatus("EditStatus");
    props.setMode("Editmode");
  };

  useEffect(() => {
    console.log("DDDDDDDD$$$")
    dispatch(userInfo(location.state));
    setInputDescription("");
  }, [update]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInputDescription("");
    setOpen(false);
  };

  const handleClickCheckOpen = () => {
    if (inputDescription !== "") {
      setCheckOpen(true);
      setOpen(false);
    }
  };

  const handleCheckCloseAPI = () => {
    dispatch(
      userUnlock([{ cardId: user.cardId, description: inputDescription }])
    );
    setUpdate(true);
    dispatch(userInfo(location.state));
    setCheckOpen(false);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 3000);
  };

  const handleCheckClose = () => {
    setInputDescription("");
    setCheckOpen(false);
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
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#363F4E", //FIELD 框
      },
    },
  });

  return (
    <div>
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
          <p>{user.cardId !== undefined ? user.cardId : "沒有卡號"}</p>
        )}
      </div>
      <div className="base phone">
        <PhoneAndroidIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {isFetching ? (
          <Skeleton animation="wave" width={"40%"} sx={{ marginLeft: 1 }} />
        ) : (
          <p>{user.phone !== undefined ? user.phone : "沒有電話"}</p>
        )}
      </div>
      <div className="base mail">
        <MailOutlineIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {isFetching ? (
          <Skeleton animation="wave" width={"80%"} sx={{ marginLeft: 1 }} />
        ) : (
          <p>{user.email !== undefined ? user.email : "沒有信箱"}</p>
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
          startIcon={<LockOpenIcon />}
        >
          強制開鎖
        </Button>

        <Button
          onClick={handleEdit}
          variant="contained"
          style={{
            width: "80%",
            height: 39,
            background: "#A0A0A0",
            boxShadow: "none",
            fontSize: 18,
            margin: 5,
          }}
          startIcon={<EditIcon />}
        >
          編輯基本資訊
        </Button>
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
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
                id="input-reason"
                placeholder="請輸入提醒內容"
                inputProps={{
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
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
              onClick={handleCheckCloseAPI}
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
      </div>
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
  );
};

export default Readmode;
