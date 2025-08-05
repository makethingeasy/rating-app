import React from "react";

export default function EmployeeTable() {
  return (
    <div style={{
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0 1px 10px #ccc"
    }}>
      <h3>Employee List</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th>Name</th>
            <th>Department</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brooklyn Simmons</td>
            <td>Design</td>
            <td>UI Designer</td>
          </tr>
          <tr>
            <td>Cody Fisher</td>
            <td>Development</td>
            <td>Front-End</td>
          </tr>
          <tr>
            <td>Ralph Edwards</td>
            <td>Design</td>
            <td>UX Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
