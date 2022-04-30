import React from 'react'
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { userAdd } from "../redux/userSlice";
import Skeleton from "@mui/material/Skeleton";

const Adduser = (props) => {

    const { isFetching } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleAdd = () => {
        props.setUserStatus("AddStatus");
        props.setMode("Editmode");
    };

    return (
        <div>
            {isFetching ? <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} /> : <Button
                onClick={handleAdd}
                variant="contained"
                style={{
                    width: "100%",
                    height: 39,
                    background: "#363F4E",
                    boxShadow: "none",
                    fontSize: 18,
                    margin: 5,
                    fontFamily: "Roboto",
                }}
            >
                <EditIcon />新增會員資訊
            </Button>}

        </div>
    )
}

export default Adduser
