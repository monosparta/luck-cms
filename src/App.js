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
const App = () => {
  const tkn = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {tkn !== null ? (
          <Route path="/logout" element={<Logout />} />
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
        <Route path="/" element={<Login />} />
        <Route path="/luck" element={<Luck />} />
      </Routes>
    </Router>
  );
};

export default App;
