import React from "react";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { userUpdate } from "../redux/userSlice";
import { userAdd, userInfo } from "../redux/userSlice";
import "./InfoForm.css";

const InfoForm = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();

  const { user, updating } = useSelector(selectUser);
  // useEffect(() => {
  //   dispatch(clearState());
  //   dispatch(userInfo(location.state));
  // }, []);

  const [inputName, setInputName] = React.useState(user.name);
  const [inputCard, setInputCard] = React.useState(user.cardId);
  const [inputPhone, setInputPhone] = React.useState(user.phone);
  const [inputEmail, setInputEmail] = React.useState(user.email);
  const [errorName, setErrorName] = React.useState(false);
  const [errorCard, setErrorCard] = React.useState(false);
  const [errorPhone, setErrorPhone] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorNameColor, setErrorNameColor] = React.useState("gray");
  const [errorCardColor, setErrorCardColor] = React.useState("gray");
  const [errorPhoneColor, setErrorPhoneColor] = React.useState("gray");
  const [errorEmailColor, setErrorEmailColor] = React.useState("gray");
  const emailRule = "^[A-Za-z0-9+_.-]+@(.+)$";

  const { isSuccess } = useSelector(selectUser);

  const handleLeave = () => {
    props.setUserStatus("");
  };

  let Infodata = {
    id: user.id,
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    cardId: inputCard,
  };

  let Adddata = {
    lockerNo: location.state,
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    cardId: inputCard,
  };
  console.log(Adddata);

  const handleSave = () => {
    switch (props.userStatus) {
      case 'AddStatus':
        if (inputName === '') {
          // setError(true);
          setErrorName(true)
          setErrorNameColor("#d32f2f")
        } else setError(false);
        if (
          (inputCard.length >= 20 || inputCard === undefined)
        ) {
          // setError(true);
          setErrorCard(true)
          setErrorCardColor("#d32f2f")
        } else setError(false);
        if (
          (
            !(inputPhone.startsWith("09") && inputPhone.length === 10) &&
            !(inputPhone.startsWith("8869") && inputPhone.length === 12)
          ) || inputPhone === undefined
        ) {
          // setError(true);
          setErrorPhone(true);
          setErrorPhoneColor("#d32f2f")
        } else setError(false);
        if (inputEmail.search(emailRule) === -1) {
          // setError(true);
          setErrorEmail(true)
          setErrorEmailColor("#d32f2f")
        } else setError(false);
        console.log(errorName, errorCard, errorPhone, errorEmail)
        if (error === false) {
          dispatch(userAdd(Adddata));
          dispatch(userInfo(location.state));
          props.setUserStatus("");
        }
        break;
      case 'EditStatus':
        if (inputName === undefined) {
          // setError(true);
          setErrorName(true)
          setErrorNameColor("#d32f2f")
        }
        else if (
          (inputCard.length >= 20)
        ) {
          // setError(true);
          setErrorCard(true)
          setErrorCardColor("#d32f2f")
        }
        else if (
          (
            !(inputPhone.startsWith("09") && inputPhone.length === 10) &&
            !(inputPhone.startsWith("8869") && inputPhone.length === 12)
          ) ||
          inputPhone === undefined
        ) {
          // setError(true);
          setErrorPhone(true);
          setErrorPhoneColor("#d32f2f")
        }
        else if (inputEmail.search(emailRule) === -1) {
          // setError(true);
          setErrorEmail(true)
          setErrorEmailColor("#d32f2f")
        } else {
          dispatch(userUpdate(Infodata));
          props.setUserStatus("");
        }
        break;
      default:
        props.setUserStatus("");
        return true;
    }

  };

  // const handleSave = () => {
  //   switch (props.userStatus) {
  //     case "AddStatus":
  //       dispatch(userAdd(Adddata));
  //       dispatch(userInfo(location.state));
  //       props.setUserStatus("");
  //       break;
  //     case "EditStatus":
  //       dispatch(userUpdate(Infodata));
  //       dispatch(userInfo(location.state));
  //       props.setUserStatus("");
  //       break;
  //     default:
  //       props.setUserStatus("");
  //       return true;
  //   }
  // };
  return (
    <div>
      <div className="base name">
        <AccountCircleIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {updating ? (
          <Skeleton animation="wave" width={"50%"} sx={{ marginLeft: 1 }} />
        ) : (
          <TextField
            size="small"
            error={errorName}
            value={inputName}
            onChange={(e) => { setInputName(e.target.value.replace(/[\d"'˙<>;().!#$%&*+\-/=?^_`{|}~@]/g, "")); setErrorName(false); setErrorNameColor("gray") }}
            // defaultValue={user.name}
            // onChange={(e) => setInputName(e.target.value)}
            InputLabelProps={{ style: { color: errorNameColor } }}
            sx={{
              width: "100%",
              borderColor: "#000",
              margin: "6px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "gray", //FIELD 框
                },
                "&.MuiOutlinedInput-notchedOutline": {
                  borderColor: "red", //FIELD 框
                },
              },
            }}
            label="姓名"
            autoComplete="current-password"
            inputProps={{
              size: "small",
            }}

          >
            {/* {user.name !== undefined ? user.name : "沒有使用者"} */}
          </TextField>
        )}
      </div>
      <div className="base card">
        <CreditCardIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {updating ? (
          <Skeleton animation="wave" width={"60%"} sx={{ marginLeft: 1 }} />
        ) : (
          <TextField
            size="small"
            error={errorCard}
            value={inputCard}
            onChange={(e) => { setInputCard(e.target.value.replace(/\D/g, "")); setErrorCard(false); setErrorCardColor("gray") }}
            // defaultValue={user.cardId}
            // onChange={(e) => setInputCard(e.target.value)}
            InputLabelProps={{ style: { color: errorCardColor } }}
            sx={{
              width: "100%",
              borderColor: "#000",
              margin: "6px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "gray",

                  //FIELD 框
                },
              },
            }}
            label="卡號"
            autoComplete="current-password"
            inputProps={{
              style: {},
            }}
          >
            {/* {user.cardId !== undefined ? user.cardId : "沒有卡號"} */}
          </TextField>
        )}
      </div>
      <div className="base phone">
        <PhoneAndroidIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {updating ? (
          <Skeleton animation="wave" width={"40%"} sx={{ marginLeft: 1 }} />
        ) : (
          <TextField
            size="small"
            error={errorPhone}
            value={inputPhone}
            onChange={(e) => { setInputPhone(e.target.value.replace(/\D/g, "")); setErrorPhone(false); setErrorPhoneColor("gray") }}
            // defaultValue={user.phone}
            // onChange={(e) => setInputPhone(e.target.value)}
            InputLabelProps={{ style: { color: errorPhoneColor } }}
            sx={{
              width: "100%",
              borderColor: "#000",
              margin: "6px",
              "& .MuiInputLabel-root": {},
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "gray", //FIELD 框
                },
              },
            }}
            label="電話"
            autoComplete="current-password"
            inputProps={{
              style: {},
            }}
          >
            {/* {user.phone !== undefined ? user.phone : "沒有電話"} */}
          </TextField>
        )}
      </div>
      <div className="base mail">
        <MailOutlineIcon style={{ fontSize: "30", margin: "8px 0" }} />
        {updating ? (
          <Skeleton animation="wave" width={"80%"} sx={{ marginLeft: 1 }} />
        ) : (
          <TextField
            size="small"
            error={errorEmail}
            value={inputEmail}
            onChange={(e) => { setInputEmail(e.target.value.replace(/[^\w.!#$%&'*+\-/=?^_`{|}~@]/ig, "")); setErrorEmail(false); setErrorEmailColor("gray") }}
            // defaultValue={user.email}
            // onChange={(e) => setInputEmail(e.target.value)}
            InputLabelProps={{ style: { color: errorEmailColor } }}
            sx={{
              width: "100%",
              borderColor: "#000",
              margin: "6px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "gray", //FIELD 框
                },
              },
            }}
            label="電子信箱"
            autoComplete="current-password"
            inputProps={{
              style: {},
            }}
          >
            {/* {user.email !== undefined ? user.email : "沒有信箱"} */}
          </TextField>
        )}
      </div>
      <div className="save-btn">
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

export default InfoForm;
