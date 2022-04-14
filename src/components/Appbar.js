import React from "react";
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
    navigate("/");
  };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' elevation={0} style={{ background: '#BCD5DE' }} >
				<Toolbar>
					<img src='./mono.png' alt='' className='logo' />
					<p className='title'>會員置物櫃管理系統</p>
					<Box sx={{ flexGrow: 1 }} />
					<div className='Bar'>
						<div className='Bar-user'>
							<Avatar>R</Avatar>
							<p className='username'> Rosa </p>
						</div>
						<div className='Bar-logout'>
							<LogoutIcon></LogoutIcon>
              <stack>
							<Button variant="Logout" sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className='Bar-logout' style={{textTransform: 'none'}} onClick={(e) => handleClick(e)}> Logout </Button>
              </stack>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
