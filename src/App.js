import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Appbar from "./components/Appbar";
import "./App.css";
// 若用戶已登入，則網址輸入login頁網址應直接導至後台系統頁首頁
// Enter無法啟動跳頁 只有按按鈕才可以的問題
const App = () => {
  const tkn = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {tkn ? (
          <Route path="/Logout" element={<Logout />} />
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
        <Route path="/" index element={<Login />} />
        <Route path="/app" index element={<Appbar />} />
      </Routes>
    </Router>
  );
};

export default App;
