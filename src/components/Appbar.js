import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import { clearToken, logout } from "../redux/userSlice";
import PersonIcon from "@mui/icons-material/Person";
import "./Appbar.css";

const Appbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const handleClick = () => {
    dispatch(logout());
    localStorage.clear();
    dispatch(clearToken());
    navigate("/login");
  };

  return (
    <div className="Appbar">
      <AppBar position="static" elevation={0} style={{ background: "#363F4E" }}>
        <Toolbar>
          <Link to="/" className="appbarHomePage">
            <img src="./mono.png" alt="" className="appbarLogo" />
            <p className="appbarTitle">會員置物櫃管理系統</p>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <div className="appbar">
            <div className="appbarUser">
              <Link to="/memberlist">
                <PersonIcon />
                <p className="appbarUsername"> {name} </p>
              </Link>
            </div>
            <div className="appbarLogout">
              <Button
                variant="appbarLogout"
                className="appbarLogoutButton"
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
                <LogoutIcon className="appbarLogoutIcon"></LogoutIcon>
                Logout
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Appbar;
