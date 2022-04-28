import React from "react";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { selectUser, clearState } from "../redux/userSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userInfo } from "../redux/userSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import userupdate from "../redux/userSlice";
import "./Editmode.css";

const Editmode = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { user, isFetching } = useSelector(selectUser);
    useEffect(() => {
        dispatch(clearState());
        dispatch(userInfo(location.state));
    }, []);

    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [checkOpen, setCheckOpen] = React.useState(false);
    const [inputName, setInputName] = React.useState("");
    const [inputCard, setInputCard] = React.useState("");
    const [inputPhone, setInputPhone] = React.useState("");
    const [inputEmail, setInputEmail] = React.useState("");


    const handleLeave = () => {
        props.setMode("Readmode");

    }

    const handleEdit = () => {
        dispatch(
            userupdate(Infodata)
        );
        props.setMode("Readmode");
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickCheckOpen = () => {
        setCheckOpen(true);
        setOpen(false);
    };

    const CssTextField = styled(TextField)({
        "& .MuiFormHelperText-root": {},
        "& label.Mui-focused": {
            //上排文字
            color: "#A0A0A0",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#A0A0A0", //FIELD 框
            },
        },
    });

    const handleCheckClose = () => {
        setCheckOpen(false);
        setAlertOpen(true);
        setTimeout(() => {
            setAlertOpen(false);
        }, 3000);
    };

    let Infodata = { 'id': location.state, 'name': inputName, 'email': inputEmail, 'phone': inputPhone, 'cardId': inputCard }

    console.log(Infodata)

    return (
        <div>
            <div className="base name">
                <AccountCircleIcon style={{ fontSize: "30", margin: "8px 0" }} />
                {isFetching ? (
                    <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        value={inputName}
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
                {isFetching ? (
                    <Skeleton animation="wave" width={"60%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        value={inputCard}
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
                {isFetching ? (
                    <Skeleton animation="wave" width={"40%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        value={inputPhone}
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
                {isFetching ? (
                    <Skeleton animation="wave" width={"80%"} sx={{ marginLeft: 1 }} />
                ) : (
                    <TextField
                        value={inputEmail}
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
                    onClick={handleEdit}
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
