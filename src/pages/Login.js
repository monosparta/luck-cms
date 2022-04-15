import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { login, clearState, selectUser } from "../redux/userSlice";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(selectUser);
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      console.log("Error...");
    }
    if (isFetching) {
      dispatch(clearState());
      console.log("Waiting...");
    }
    if (isSuccess) {
      dispatch(clearState());
      navigate("/");
    }
  }, [isError, isSuccess]);

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
    <div className="login">
      <Toaster />
      <div className="login__side">
        <p className="side-name">會員置物櫃管理系統</p>
        <img src="./mono-l.png" alt="" className="side-logo" />
      </div>
      <div className="login__form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <div className="form-item-title">
              <h1>Sign in</h1>
            </div>
            <div className="form-item-user">
              <h2>帳號 Username or Email</h2>
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
            <div className="form-item-pswd">
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
            <div className="form-item-check">
              <FormControlLabel
                control={<Checkbox size="small" style={{ color: "#363F4E" }} />}
                label={<Typography sx={{ fontSize: 12 }}>保持登入</Typography>}
              />
            </div>
            <div className="form-item-btn">
              <span>
                {isFetching
                  ? toast.loading("Loading", { id: "loading" })
                  : toast.remove("loading")}
                {isError ? toast.error("Error") : null}
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
      </div>
    </div>
  );
};

export default Login;
