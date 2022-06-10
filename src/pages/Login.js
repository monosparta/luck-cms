import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { login, clearState, selectUser } from "../redux/userSlice";

import "./Login.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, isSuccess, isError } = useSelector(selectUser);

  const onSubmit = (data) => {
    if (data.email === null || data.password === null) {
      toast.error("帳號或密碼錯誤");
    }
    dispatch(login(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
    if (isFetching) {
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <div id="login">
      <Toaster />
      <div className="loginBoard">
        <p className="loginBoardTitle">會員置物櫃管理系統</p>
        <img src="./mono-l.png" alt="" className="loginBoardLogo" />
      </div>
      <div className="loginArea">
        <LoginForm onSubmit={onSubmit} toast={toast} />
      </div>
    </div>
  );
};

export default Login;
