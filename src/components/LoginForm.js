import React from "react";
import { useForm } from "react-hook-form";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

import {
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  Button,
  styled,
} from "@mui/material";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  const { isFetching, isError } = useSelector(selectUser);

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
      <form className="loginForm" onSubmit={handleSubmit(props.onSubmit)}>
        <div className="loginFormItem">
          <div className="loginFormItemTitle">
            <h1>Sign in</h1>
          </div>
          <div className="loginFormItemUser">
            <h2>帳號 Email</h2>
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
              {...register("email")}
            />
          </div>
          <div className="loginFormItemPassword">
            <h2>密碼 Password</h2>
            <CssTextField
              required
              type="password"
              id="input-password"
              placeholder="請輸入密碼"
              sx={{ width: "100%", borderColor: "#000" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
              {...register("password")}
            />
          </div>
          <div className="loginFormItemCheck">
            <FormControlLabel
              control={<Checkbox size="small" style={{ color: "#363F4E" }} />}
              label={<Typography sx={{ fontSize: 12 }}>保持登入</Typography>}
            />
          </div>
          <div className="loginFormItem-btn">
            <span>
              {isFetching
                ? props.toast.loading("登入中", { id: "loading" })
                : props.toast.remove("loading")}
              {isError ? props.toast.error("帳號或密碼錯誤") : null}
            </span>
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "100%",
                height: 47,
                background: "#363F4E",
                boxShadow: "none",
                fontSize: 18,
              }}
            >
              立即登入
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
