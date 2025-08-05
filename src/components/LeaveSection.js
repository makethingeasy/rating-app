import React from "react";

export default function LeaveSection() {
  return (
    <div>
      <div style={{
        padding: 16,
        marginBottom: 14,
        backgroundColor: "#d0f0e0",
        borderRadius: 8,
        boxShadow: "0 1px 6px #c2e6cc"
      }}>
        <h4>Sick Leave</h4>
        <p>Ralph Edwards</p>
        <p>Leave for 4 days</p>
        <p>From Jan 23, 2024 to Jan 27, 2024</p>
      </div>
      <div style={{
        padding: 16,
        backgroundColor: "#d0e8f7",
        borderRadius: 8,
        boxShadow: "0 1px 6px #b7d4f7"
      }}>
        <h4>Annual Leave</h4>
        <p>Leslie Alexander</p>
        <p>Leave for 2 days</p>
        <p>From Jan 12, 2024</p>
      </div>
    </div>
  );
}
