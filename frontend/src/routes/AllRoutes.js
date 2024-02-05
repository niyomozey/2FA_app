import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage";
import UserDashboard from "../pages/UserDashboard";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
