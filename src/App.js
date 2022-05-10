import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

const App = () => {
  const { token } = useSelector(selectUser);
  const ver = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {token === "" && ver == null ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <Route path="/" element={<Appbar />}>
            <Route path="/" element={<Luck />} />
            <Route path="/info" element={<Info />} />
          </Route>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
