import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { login, clearState, selectUser } from "../redux/userSlice";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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
      navigate("/Logout");
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
                id="outlined-basic"
                placeholder="請輸入帳號"
                sx={{ width: "100%" }}
              />
              <input type="email" placeholder="Email" {...register("email")} />
            </div>
            <div className="form-item-pswd">
              <h2>密碼 Password</h2>
              <TextField id="outlined-basic" placeholder="請輸入密碼" />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <div className="form-item-btn">
              <button className="submit__btn" type="submit">
                <span>
                  {isFetching
                    ? toast.loading("Loading", { id: "loading" })
                    : toast.remove("loading")}
                  {isError ? toast.error("Error") : null}
                </span>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
