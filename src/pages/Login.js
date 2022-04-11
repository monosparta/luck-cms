import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="submit__btn" type="submit">
          <span>
            {isFetching
              ? toast.loading("Loading", { id: "loading" })
              : toast.remove("loading")}
            {isError ? toast.error("Error") : null}
          </span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
