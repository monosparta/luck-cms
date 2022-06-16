import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

import UserDelete from "../components/UserDelete";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import Skeleton from "@mui/material/Skeleton";

const UserInfoTitle = (props) => {
  const location = useLocation();
  const { isFetching } = useSelector(selectUser);

  return (
    <div className="userInfoLockNumber">
      {isFetching ? (
        <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
      ) : (
        <>
          {props.luckIconStatus === 1 ? <LockIcon /> : <LockOpenIcon />}
          <h1>置物櫃 - {location.state}</h1>

          <UserDelete
            setUserStatus={props.setUserStatus}
            user={props.user}
            handleClickRefresh={props.handleClickRefresh}
          />
        </>
      )}
    </div>
  );
};

export default UserInfoTitle;
