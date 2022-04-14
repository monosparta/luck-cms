import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { login, clearState, selectUser } from "../redux/userSlice";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
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

  return (
    <div className="login">
      <Toaster />
      <div className="login__side">
        <p className="side-name">會員置物櫃管理系統</p>
        <img src="./mono.png" alt="" className="side-logo" />
      </div>
      <div className="login__form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <div className="form-item-title">
              <h1>Sign in</h1>
            </div>
            <div className="form-item-user">
              <h2>帳號 Username or Email</h2>
              <TextField
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
              <TextField
                required
                type="password"
                id="input-password"
                placeholder="請輸入密碼"
                sx={{ width: "100%" }}
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
                control={<Checkbox size="small" color="default" />}
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
                  background: "#C4C4C4",
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
