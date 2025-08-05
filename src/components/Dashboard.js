import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";

// Fake Stats
const statData = [
  { title: "Current Month Reviews", value: 12, icon: "📝", color: "#1976d2", trend: 8 },
  { title: "Overall Reviews", value: 41, icon: "📈", color: "#43e97b", trend: 3 },
  { title: "QR Impressions", value: 132, icon: "🔗", color: "#ffbe30", trend: 12 },
  { title: "Bad Reviews", value: 2, icon: "⚠️", color: "#e53935", trend: -2 },
];

// Review/fake data for chart and table
const chartData = [
  { label: "Aug 1", value: 2 },
  { label: "Aug 2", value: 3 },
  { label: "Aug 3", value: 5 },
  { label: "Aug 4", value: 4 },
  { label: "Aug 5", value: 2 },
  { label: "Aug 6", value: 1 },
];

const reviews = [
  {
    id: 101,
    user: "Ravi Kumar",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    date: "2025-08-03",
    rating: 1,
    content: "Product arrived late and support didn’t help.",
    status: "Pending",
  },
  {
    id: 102,
    user: "Rebecca Lee",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    date: "2025-08-05",
    rating: 2,
    content: "Service was confusing. I want a refund.",
    status: "Resolved",
  },
  {
    id: 103,
    user: "Bob Smith",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    date: "2025-08-04",
    rating: 5,
    content: "Spectacular support!", status: "Positive"
  }
];

// Star rating display
function StarDisplay({ rating }) {
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? "#eab308" : "#ececec", fontSize: 17 }}>★</span>
      ))}
    </span>
  );
}

// Stat Card
function StatCard({ title, value, trend, icon, color }) {
  return (
    <div style={{
      flex: 1, minWidth: 150, background: "#fff", borderRadius: 14,
      boxShadow: "0 1.5px 10px #dde5f055", padding: "18px 19px",
      display: "flex", alignItems: "center", gap: 14, margin: 4
    }}>
      <span style={{ background: color, color: "#fff", borderRadius: "50%", padding: 11, fontSize: 22 }}>
        {icon}
      </span>
      <div>
        <div style={{ fontWeight: 800, fontSize: 23 }}>{value}</div>
        <div style={{ fontSize: 15, color: "#7a88a9" }}>{title}</div>
        <div style={{ fontSize: 14, color: trend >= 0 ? "#27ae60" : "#e74c3c", fontWeight: 600 }}>
          {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
        </div>
      </div>
    </div>
  );
}

// Main Dashboard
export default function Dashboard() {
  const [filter, setFilter] = useState("week"); // Could be "week", "month", etc for demo

  // Review Table Section
  return (
    <div style={{ width: "100%", maxWidth: 1140, padding: "0 24px", margin: "28px auto 0 auto" }}>
      {/* STAT CARDS */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 22, marginBottom: 22, justifyContent: "space-between"
      }}>
        {statData.map(stat => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* CHART + RECENT REVIEWS */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 22,
      }}>
        {/* Review Frequency Chart Card */}
        <div style={{
          flex: 1, minWidth: 310, background: "#fff", borderRadius: 14,
          boxShadow: "0 2px 12px #a8e1f530", padding: 24, display: "flex", flexDirection: "column", justifyContent: "center"
        }}>
          <div style={{ fontWeight: 700, fontSize: 17, color: "#1976d2", marginBottom: 10 }}>
            Reviews Over Last 6 Days
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="4 5" vertical={false} />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Reviews */}
        <div style={{
          flex: 2, minWidth: 340, background: "#fff", borderRadius: 14,
          boxShadow: "0 2px 12px #c8d2eb25", padding: 24
        }}>
          <div style={{ fontWeight: 800, fontSize: 19, color: "#1976d2", marginBottom: 18 }}>
            Recent Reviews
          </div>
          {reviews.slice(0, 4).map(r => (
            <div key={r.id} style={{
              display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: "1px solid #f2f3fa"
            }}>
              <img src={r.avatar} alt={r.user} style={{
                width: 46, height: 46, borderRadius: "50%", objectFit: "cover",
                boxShadow: "0 2px 6px #1976d210", border: "2.5px solid #f1f1f6"
              }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{r.user}</div>
                <div style={{ color: "#9798ae", fontSize: 13 }}>{r.date}</div>
                <div style={{ fontSize: 15, color: "#434f7b", margin: "3px 0" }}>{r.content}</div>
                <div>
                  <StarDisplay rating={r.rating} /> <span style={{ color: "#222", fontSize: 13, marginLeft: 4 }}>{r.rating}</span>
                  <span style={{
                    marginLeft: 11, padding: "2px 12px", borderRadius: 12,
                    color: r.status === "Pending" ? "#e67e22" : (r.status === "Resolved" ? "#43a047" : "#1976d2"),
                    background: r.status === "Pending" ? "#fff3e0" : (r.status === "Resolved" ? "#dcfbe3" : "#eaf4ff"),
                    fontWeight: 700, fontSize: 13
                  }}>{r.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEW TREND / LINE GRAPH */}
      <div style={{
        background: "#fff", borderRadius: 14, boxShadow: "0 2px 12px #daf2ff25", padding: "24px 22px", marginBottom: 22
      }}>
        <div style={{
          fontWeight: 700, fontSize: 17, color: "#1976d2",
          marginBottom: 11, display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <span>Reviews Trend (Last 6 Days)</span>
          <span style={{ display: "flex", gap: 5 }}>
            {["week", "month"].map(v =>
              <button
                key={v}
                onClick={() => setFilter(v)}
                style={{
                  padding: "4px 17px",
                  borderRadius: 7,
                  border: "none",
                  background: filter === v ? "linear-gradient(90deg,#1976d2 30%,#43e97b 100%)" : "#f7fafe",
                  color: filter === v ? "#fff" : "#1976d2",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >{v === "week" ? "Last 7 days" : "This month"}</button>
            )}
          </span>
        </div>
        <ResponsiveContainer width="100%" height={110}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 5" vertical={false} />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#43e97b"
              strokeWidth={3}
              dot={{ r: 6, stroke: "#1976d2", strokeWidth: 2 }}
              activeDot={{ r: 9, fill: "#1976d2" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* RESPONSIVE: extra info/other cards/etc can be added here */}
    </div>
  );
}
