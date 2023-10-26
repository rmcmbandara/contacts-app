import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNav from "./components/Common/SiteNav";
import SiteFooter from "./components/Common/SiteFooter";
import Home from "./components/Common/home/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Common/auth/LoginPage";
import RegisterPage from "./components/Common/auth/RegisterPage";

function App() {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/login"  element={<LoginPage/>  } />
        <Route path="/register"  element={<RegisterPage/>  } />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
