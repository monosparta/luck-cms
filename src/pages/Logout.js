import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "../redux/userSlice";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");

    dispatch(login());
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>
        Welcome! <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__btn" onClick={(e) => handleClick(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
