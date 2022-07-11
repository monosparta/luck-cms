import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLock } from "../redux/lockSlice";

import UserDelete from "../components/UserDelete";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import Skeleton from "@mui/material/Skeleton";

const UserInfoTitle = (props) => {
  const location = useLocation();
  const { lockIsFetching } = useSelector(selectLock);

  return (
    <div className="userInfoLockNumber">
      {lockIsFetching ? (
        <Skeleton animation="wave" width={"150px"} sx={{ marginLeft: 1 }} />
      ) : (
        <>
          {props.luckIconStatus === 1 ? <LockIcon /> : <LockOpenIcon />}
          <h1>置物櫃 - {location.state}</h1>

          <UserDelete
            setLuckIconStatus={props.setLuckIconStatus}
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
