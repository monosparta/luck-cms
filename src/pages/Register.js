import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./Register.css";
const Register = () => {
  return (
    <div id="register">
      <div className="registerArea">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
