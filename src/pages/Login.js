import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { login, clearState, selectUser } from "../redux/userSlice";
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
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isFetching) {
      // *************************************************************************
    }
    if (isSuccess) {
      dispatch(clearState());
      navigate("/Logout");
    }
  }, [isError, isSuccess]);

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
