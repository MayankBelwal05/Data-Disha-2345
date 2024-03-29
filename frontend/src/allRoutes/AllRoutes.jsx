import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/LoginSignUp";
import Signup from "../pages/SignupPage"
// import Homepage from "../pages/HomePage";


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
