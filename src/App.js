import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
import "./App.css";

const App = () => {
  const user = useSelector(selectUser);
  const tkn = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="*" element={<h1>There's nothing here</h1>} />
        {tkn ? (
          <Route path="/Logout" element={<Logout />} />
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
