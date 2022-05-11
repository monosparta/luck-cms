import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [colorName, setColorName] = React.useState("gray");
  const [colorCard, setColorCard] = React.useState("gray");
  const [colorPhone, setColorPhone] = React.useState("gray");
  const [colorEmail, setColorEmail] = React.useState("gray");
  //^[A-Za-z0-9+_.-]+@(.+)$
  const emailRule =
    "^[w!#$%&'*+-/=?^_`{|}~]+(.[w!#$%&'*+-/=?^_`{|}~]+)*@[w-]+(.[w-]+)+$";
  const phoneRule = "^(09)[0-9]{8}$";
  const globalPhoneRule = "^(886)[0-9]{9}$";

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

  // const handleSave = () => {
  //   switch (props.userStatus) {
  //     case 'AddStatus':
  // if (inputName === undefined) {
  //   setError(true);
  //   setErrorName(true)
  // }
  // else if (
  //   (inputCard.length >= 20)
  // ) {
  //   setError(true);
  //   setErrorCard(true)
  // }
  // else if (
  //   !(inputPhone.startsWith("09") && inputPhone.length === 10) &&
  //   !(inputPhone.startsWith("8869") && inputPhone.length === 12) ||
  //   inputPhone === undefined
  // ) {
  //   setError(true);
  //   setErrorPhone(true);
  // }
  // else if (inputEmail.search(emailRule) === -1) {
  //   setError(true);
  //   setErrorEmail(true)

  // } else {
  //   dispatch(userAdd(Adddata));
  //   dispatch(userInfo(location.state));
  //   props.setUserStatus("");
  // }
  //   break;
  // case 'EditStatus':
  // if (inputName === undefined) {
  //   setError(true);
  //   setErrorName(true)
  // }
  // else if (
  //   (inputCard.length >= 20)
  // ) {
  //   setError(true);
  //   setErrorCard(true)
  // }
  // else if (
  //   !(inputPhone.startsWith("09") && inputPhone.length === 10) &&
  //   !(inputPhone.startsWith("8869") && inputPhone.length === 12) ||
  //   inputPhone === undefined
  // ) {
  //   setError(true);
  //   setErrorPhone(true);
  // }
  // else if (inputEmail.search(emailRule) === -1) {
  //   setError(true);
  //   setErrorEmail(true)
  // } else {
  //   dispatch(userUpdate(Infodata));
  //   props.setUserStatus("");
  // }
  //       break;
  //     default:
  //       props.setUserStatus("");
  //       return true;
  //   }

  // };

  const verifyName = (e) => {
    if (e.target.value.length <= 0) {
      setErrorName(true);
      setColorName("#d32f2f");
      setError(true);
    } else {
      setErrorName(false);
      setColorName("gray");
      setError(false);
    }
  };

  const verifyCard = (e) => {
    if (e.target.value.length <= 0 || e.target.value.length >= 20) {
      setErrorCard(true);
      setColorCard("#d32f2f");
      setError(true);
    } else {
      setErrorCard(false);
      setColorCard("gray");
      setError(false);
    }
  };

  const verifyPhone = (e) => {
    if (e.target.value.length <= 0 || e.target.value.search(phoneRule) === -1) {
      setErrorPhone(true);
      setColorPhone("#d32f2f");
      setError(true);
    } else {
      setErrorPhone(false);
      setColorPhone("gray");
      setError(false);
    }
  };

  const verifyEmail = (e) => {
    if (e.target.value.search(emailRule) === -1 || e.target.value.length <= 0) {
      setErrorEmail(true);
      setColorEmail("#d32f2f");
      setError(true);
    } else {
      setErrorEmail(false);
      setColorEmail("gray");
      setError(false);
    }
  };

  const handleSave = () => {
    if (inputName === undefined) {
      setErrorName(true);
      setColorName("#d32f2f");
    }
    if (inputPhone === undefined) {
      setErrorPhone(true);
      setColorPhone("#d32f2f");
    }
    if (inputCard === undefined) {
      setErrorCard(true);
      setColorCard("#d32f2f");
    }
    if (inputEmail === undefined) {
      setErrorEmail(true);
      setColorEmail("#d32f2f");
    } else if (
      errorName === false &&
      errorCard === false &&
      errorPhone === false &&
      errorEmail === false
    ) {
      switch (props.userStatus) {
        case "AddStatus":
          dispatch(userAdd(Adddata));
          dispatch(userInfo(location.state));
          props.setUserStatus("");
          break;
        case "EditStatus":
          dispatch(userUpdate(Infodata));
          dispatch(userInfo(location.state));
          props.setUserStatus("");
          break;
        default:
          props.setUserStatus("");
          return true;
      }
    }
  };
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
            onBlur={(e) => {
              verifyName(e);
            }}
            onChange={(e) => {
              setInputName(
                e.target.value.replace(/[\d"'˙<>;().!#$%&*+\-/=?^_`{|}~@]/g, "")
              );
              setErrorName(false);
            }}
            // defaultValue={user.name}
            // onChange={(e) => setInputName(e.target.value)}
            InputLabelProps={{ style: { color: colorName } }}
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
            label="姓名"
            autoComplete="current-password"
            inputProps={{
              size: "small",
              style: {},
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
            onBlur={(e) => {
              verifyCard(e);
            }}
            onChange={(e) => {
              setInputCard(e.target.value.replace(/\D/g, ""));
              setErrorCard(false);
            }}
            // defaultValue={user.cardId}
            // onChange={(e) => setInputCard(e.target.value)}
            InputLabelProps={{ style: { color: colorCard } }}
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
            onBlur={(e) => {
              verifyPhone(e);
            }}
            onChange={(e) => {
              setInputPhone(e.target.value.replace(/[^\d.]/g, ""));
              setErrorPhone(false);
            }}
            // defaultValue={user.phone}
            // onChange={(e) => setInputPhone(e.target.value)}
            InputLabelProps={{ style: { color: colorPhone } }}
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
            onBlur={(e) => {
              verifyEmail(e);
            }}
            onChange={(e) => {
              setInputEmail(e.target.value.replace(/[^\w=@#.]|_/gi, ""));
              setErrorEmail(false);
            }}
            // defaultValue={user.email}
            // onChange={(e) => setInputEmail(e.target.value)}
            InputLabelProps={{ style: { color: colorEmail } }}
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
