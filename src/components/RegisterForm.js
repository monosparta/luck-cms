import React from "react";
import { TextField, Button, styled } from "@mui/material";
import { useForm } from "react-hook-form";

const RegisterForm = (props) => {
  const { register, handleSubmit } = useForm();

  const CssTextField = styled(TextField)({
    "& .MuiFormHelperText-root": {
      "&.Mui-focused": {
        //提示文字
        color: "#02A2EE",
      },
    },
    "& label.Mui-focused": {
      //上排文字
      color: "#02A2EE",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#363F4E", //FIELD 框
      },
    },
  });
  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit(props.onSubmit)}>
        <div className="registerFormItem">
          <div className="registerFormItemTitle">
            <h1>Sign up</h1>
          </div>
          <div className="registerFormItemUser">
            <h2>使用者名稱 Username</h2>
            <CssTextField
              required
              type="text"
              id="input-text"
              placeholder="請輸入名稱"
              sx={{ width: "100%" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
              {...register("user")}
            />
          </div>
          <div className="registerFormItemEmail">
            <h2>帳號 Email</h2>
            <CssTextField
              required
              type="email"
              id="input-email"
              placeholder="請輸入帳號"
              sx={{ width: "100%" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
              {...register("email")}
            />
          </div>
          <div className="registerFormItemPassword">
            <h2>密碼 Password</h2>
            <CssTextField
              required
              type="password"
              id="input-password"
              placeholder="請輸入密碼"
              sx={{ width: "100%", borderColor: "#000" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
              {...register("password")}
            />
          </div>
          <div className="registerFormItemConfirm">
            <h2>確認密碼 Confirm Password</h2>
            <CssTextField
              required
              type="password"
              id="input-confirm"
              placeholder="請輸入確認密碼"
              sx={{ width: "100%", borderColor: "#000" }}
              inputProps={{
                style: {
                  height: "14px",
                },
              }}
              {...register("confirm")}
            />
          </div>
          <div className="registerFormItemButton">
            {/* <span>
              {isFetching
                ? props.toast.loading("登入中", { id: "loading" })
                : props.toast.remove("loading")}
              {isError ? props.toast.error("帳號或密碼錯誤") : null}
            </span> */}
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "100%",
                height: 47,
                background: "#363F4E",
                boxShadow: "none",
                fontSize: 24,
              }}
            >
              新增管理者
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
