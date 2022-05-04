import React from 'react'
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

const Adduser = (props) => {

    const { isFetching } = useSelector(selectUser);

    const handleAdd = () => {
        props.setUserStatus("AddStatus");
        props.setMode("Editmode");
    };

    return (
        <div className="add-btn">
            {isFetching ? <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} /> : <Button
                onClick={handleAdd}
                variant="contained"
                style={{
                    width: "80%",
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
