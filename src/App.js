import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Luck from "./pages/Luck";
import Appbar from "./components/Appbar";
import "./App.css";
// 若用戶已登入，則網址輸入login頁網址應直接導至後台系統頁首頁
// 第一次登入無法跳頁

const tkn = localStorage.getItem("token");

const App = () => {
  return (
    <Router>
      <Routes>
        {tkn ? (
          <Route path="/" element={<Luck />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/login" index element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};


export default App;
