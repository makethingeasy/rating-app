import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Bad Reviews", path: "/review" },
  { label: "Profile Overview", path: "/profile" },
  { label: "Upgrade Plan", path: "/recharge" },
//   { label: "Performance", path: "/performance" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Mark active based on current route
  const isActive = (path) => location.pathname === path;

  return (
    <aside style={styles.sidebar}>
      <h2 style={{ color: "#1976d2" }}>Sidebar</h2>
      {navItems.map(({ label, path }) => (
        <div
          key={label}
          onClick={() => navigate(path)}
          style={{
            ...styles.navItem,
            backgroundColor: isActive(path) ? "#eaf2fd" : "transparent",
            color: isActive(path) ? "#1976d2" : "#000",
            cursor: "pointer",
            userSelect: "none",
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              navigate(path);
            }
          }}
        >
          {label}
        </div>
      ))}
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 220,
    background: "#fff",
    borderRight: "1px solid #ddd",
    height: "100vh",
    padding: 20,
    boxSizing: "border-box"
  },
  navItem: {
    padding: "12px 20px",
    marginBottom: 6,
    borderRadius: 6,
    fontSize: 16,
  },
};
