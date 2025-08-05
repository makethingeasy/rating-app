import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import DashboardApp from "./DashboardApp"; // your dashboard main page (e.g. /dashboard)
import ReviewList from "./components/ReviewList";
import Profile from "./components/Profile";
import Recharge from "./components/Recharge";
// import other pages as needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Wrap all dashboard related pages inside DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          {/* <Route index element={<Navigate to="/dashboard" replace />} /> */}
          <Route path="dashboard" element={<DashboardApp />} />
          <Route path="review" element={<ReviewList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="recharge" element={<Recharge />} />
          {/* add other routes here */}
        </Route>

        {/* Catch all unknown routes and redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
