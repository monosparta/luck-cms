import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "../redux/userSlice";
import "./Appbar.css";

const Appbar = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");

    dispatch(login());
    navigate("/login");
  };

  return (
    <div className="Appbar">
      <AppBar position="static" elevation={0} style={{ background: "#363F4E" }}>
        <Toolbar>
          <img src="./mono.png" alt="" className="logo" />
          <p className="title">會員置物櫃管理系統</p>
          <Box sx={{ flexGrow: 1 }} />
          <div className="Bar">
            <div className="Bar-user">
              <Avatar
                className="avatar"
                src="./user.png"
                sx={{ width: 36, height: 36 }}
              ></Avatar>
              <p className="username"> Rosa </p>
            </div>
            <div className="Bar-logout">
              <stack>
                <Button
                  variant="Logout"
                  className="Bar-logout"
                  style={{
                    border: "1px solid",
                    borderColor: "#fff",
                    borderSize: "border-box",
                    borderRadius: "4px",
                    height: 36,
                    width: 116,
                    textTransform: "none",
                  }}
                  onClick={(e) => handleClick(e)}
                >
                  <LogoutIcon className="logout-icon"></LogoutIcon>
                  Logout
                </Button>
              </stack>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Appbar;
