import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Luck from "./pages/Luck";
import Appbar from "./components/Appbar";
import "./App.css";

// 若用戶已登入，則網址輸入login頁網址應直接導至後台系統頁首頁
// 第一次登入無法跳頁
// 登出後按上一頁還是可以進到後台
// useEffect tkn ?

// const tkn = localStorage.getItem("token");
const tkn = true;
const App = () => {
  return (
    <Router>
      <Routes>
        {tkn ? (
          <Route path="/" element={<Appbar />}>
            <Route path="/" element={<Luck />} />
            <Route path="/info" element={<Info />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/login" index element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
