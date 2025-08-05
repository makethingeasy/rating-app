import React from "react";

export default function TopBar() {
  return (
    <div style={{
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0 1px 10px #ccc"
    }}>
      <h2 style={{ color: "#1976d2" }}>Payment Method</h2>
      <p>Cardholder Name: Rocks Company Ltd</p>
      <p>Account Number: **** **** **** 6273</p>
      <p>Expiration: 12/28</p>
      <p>Payment Method: VISA Debit Card</p>
    </div>
  );
}
