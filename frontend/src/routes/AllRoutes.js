import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage";
import UserDashboard from "../pages/UserDashboard";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashboard" element={<UserDashboard />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
