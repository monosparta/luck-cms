import React from "react";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { selectUser, clearState } from "../redux/userSlice";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userInfo } from "../redux/userSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { userupdate } from "../redux/userSlice";
import "./Editmode.css";

const Editmode = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { user, updating } = useSelector(selectUser);
    useEffect(() => {
        dispatch(clearState());
        dispatch(userInfo(location.state));
    }, []);

    const [inputName, setInputName] = React.useState("");
    const [inputCard, setInputCard] = React.useState("");
    const [inputPhone, setInputPhone] = React.useState("");
    const [inputEmail, setInputEmail] = React.useState("");


    const handleLeave = () => {
        props.setMode("Readmode");

    }

    const handleSave = () => {
        console.log('54', Infodata)
        dispatch(
            userupdate(Infodata)
        );
        props.setMode("Readmode");
    }

    let Infodata = { 'id': user.id, 'name': inputName, 'email': inputEmail, 'phone': inputPhone, 'cardId': inputCard }

    console.log('===infodata===', Infodata);

    return (
        <div>
            <div className="base name">
                <AccountCircleIcon style={{ fontSize: "30", margin: "8px 0" }} />
                {updating ? (
                    <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        defaultValue={user.name}
                        onChange={(e) => setInputName(e.target.value)}
                        sx={{ width: "100%", borderColor: "#000", margin: "6px" }}
                        label="姓名"
                        autoComplete="current-password"
                        inputProps={{
                            size: "small",
                            style: {
                                height: "8px",
                            },
                        }}
                    >
                        {user.name !== undefined ? user.name : "沒有使用者"}
                    </TextField>
                )}
            </div>
            <div className="base card">
                <CreditCardIcon style={{ fontSize: "30", margin: "8px 0" }} />
                {updating ? (
                    <Skeleton animation="wave" width={"60%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        defaultValue={user.cardId}
                        onChange={(e) => setInputCard(e.target.value)}
                        sx={{ width: "100%", borderColor: "#000", margin: "6px" }}
                        label="卡號"
                        autoComplete="current-password"
                        inputProps={{
                            style: {
                                height: "8px",
                            },
                        }}
                    >
                        {user.cardId !== undefined ? user.cardId : "沒有卡號"}
                    </TextField>
                )}
            </div>
            <div className="base phone">
                <PhoneAndroidIcon style={{ fontSize: "30", margin: "8px 0" }} />
                {updating ? (
                    <Skeleton animation="wave" width={"40%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        defaultValue={user.phone}
                        onChange={(e) => setInputPhone(e.target.value)}
                        sx={{ width: "100%", borderColor: "#000", margin: "6px" }}
                        label="電話"
                        autoComplete="current-password"
                        inputProps={{
                            style: {
                                height: "8px",
                            },
                        }}
                    >
                        {user.phone !== undefined ? user.phone : "沒有電話"}
                    </TextField>
                )}
            </div>
            <div className="base mail">
                <MailOutlineIcon style={{ fontSize: "30", margin: "8px 0" }} />
                {updating ? (
                    <Skeleton animation="wave" width={"80%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        defaultValue={user.email}
                        onChange={(e) => setInputEmail(e.target.value)}
                        sx={{ width: "100%", borderColor: "#000", margin: "6px" }}
                        label="電子信箱"
                        autoComplete="current-password"
                        inputProps={{
                            style: {
                                height: "8px",
                            },
                        }}
                    >
                        {user.email !== undefined ? user.email : "沒有信箱"}
                    </TextField>
                )}
            </div>
            <div className="control-btn">
                <Button
                    onClick={handleSave}
                    variant="contained"
                    style={{
                        width: "40%",
                        height: 39,
                        background: "#363F4E",
                        boxShadow: "none",
                        fontSize: 18,
                        margin: 5,
                    }}
                >
                    儲存
                </Button>

                <Button
                    onClick={handleLeave}
                    variant="contained"
                    style={{
                        width: "40%",
                        height: 39,
                        background: "#363F4E",
                        boxShadow: "none",
                        fontSize: 18,
                        margin: 5,
                    }}
                >
                    取消
                </Button>
            </div>
        </div>
    );
};

export default Editmode;
