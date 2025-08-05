import React from "react";

export default function WorkHours() {
  return (
    <div style={{
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0 1px 10px #ccc"
    }}>
      <h3>Member Work Hours</h3>
      <p>120h 54m</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: 20, height: 60, backgroundColor: "blue" }}> </div>
        <div style={{ width: 20, height: 60, backgroundColor: "blue" }}> </div>
        <div style={{ width: 20, height: 80, backgroundColor: "blue" }}> </div>
        <div style={{ width: 20, height: 50, backgroundColor: "blue" }}> </div>
        <div style={{ width: 20, height: 60, backgroundColor: "blue" }}> </div>
      </div>
      <p style={{ fontSize: 12, color: "#666" }}>Jan 24 - Jan 28</p>
    </div>
  );
}
