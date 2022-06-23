import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./Register.css";
const Register = () => {
  const onSubmit = (data) => {
    if (data.email === null || data.password === null) {
      console.log("帳號或密碼錯誤");
    }
  };
  return (
    <div id="register">
      <div className="registerArea">
        <RegisterForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Register;
