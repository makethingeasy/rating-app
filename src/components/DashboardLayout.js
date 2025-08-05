// src/components/DashboardLayout.js
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f6f7fb" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 24 }}>
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
}
