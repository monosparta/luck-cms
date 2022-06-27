import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { TextField, styled } from "@mui/material";
const MemberDialog = (props) => {
  if (props.checkAction === "edit") {
    props.setCheckAction("");
    props.setAlertText("修改密碼");
  } else if (props.checkAction === "delete") {
    props.setCheckAction("");
    props.setAlertText("刪除使用者");
    props.setCheckOpen(false);
    props.setOpen(true);
  }

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
    <>
      <Dialog
        open={props.checkOpen}
        onClose={props.handleCheckClose}
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
            {/* <TextField
              required
              multiline
              id="input-reason"
              placeholder="請輸入提醒內容"
              sx={{
                "& .MuiOutlinedInput-root": {
                  display: "flex",
                  alignItems: "flex-start",
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", //FIELD 框
                  },
                },
              }}
            /> */}
            <CssTextField
              required
              type="email"
              id="input-email"
              placeholder="請輸入帳號"
              sx={{ width: "100%" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
            />
          </DialogContent>
        </div>
        <DialogActions sx={{ width: 328 }}>
          <Button
            variant="contained"
            onClick={() => {
              props.setOpen(true);
              props.handleCheckClose();
            }}
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
            onClick={props.handleCheckClose}
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

      {/* ----------------------------------------------------- */}

      <Dialog
        open={props.open}
        onClose={props.handleClose}
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
            <p>確定要{props.alertText}嗎？</p>
          </div>
        </DialogTitle>
        <DialogActions sx={{ width: 244 }}>
          <Button
            variant="contained"
            onClick={() => {
              props.setOpen(false);
              props.HandleModtify();
            }}
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
            onClick={() => {
              props.setOpen(false);
            }}
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
    </>
  );
};

export default MemberDialog;
