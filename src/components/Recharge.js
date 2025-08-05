import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const plans = [
  {
    name: "Basic",
    price: "₹499/month",
    features: ["1,000 reviews/mo", "Basic analytics", "1 brand", "Email support"],
    recommended: false,
  },
  {
    name: "Pro",
    price: "₹1,499/month",
    features: ["10,000 reviews/mo", "Advanced analytics", "3 brands", "Priority support"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Unlimited reviews", "Full analytics + API", "Unlimited brands",
      "Account manager", "24x7 Phone/Chat/Email"
    ],
    recommended: false,
  },
];

const spending = [
  { date: "Jul 31", spend: 250 },
  { date: "Aug 1", spend: 180 },
  { date: "Aug 2", spend: 220 },
  { date: "Aug 3", spend: 150 },
  { date: "Aug 4", spend: 300 },
  { date: "Aug 5", spend: 280 },
];

export default function Recharge() {
  const [selected, setSelected] = useState("Pro");
  const currentBalance = 1200;

  return (
    <div style={{
      maxWidth: 920,
      margin: "0 auto",
      padding: "30px 0",
      fontFamily: "Inter, Arial, sans-serif",
    }}>
      <h2 style={{ color: "#1976d2", fontWeight: 800, letterSpacing: 1, marginBottom: 22 }}>
        Recharge / Upgrade Plan
      </h2>
      {/* Balance & Plans Row */}
      <div style={{
        display: "flex",
        gap: 34,
        marginBottom: 40,
        flexWrap: "wrap",
        alignItems: "flex-start"
      }}>
        {/* Balance Card */}
        <div style={{
          background: "linear-gradient(97deg, #1976d2 65%, #43e97b 120%)",
          color: "#fff",
          borderRadius: 16,
          padding: "28px 38px",
          minWidth: 220,
          boxShadow: "0 2px 12px #409fff25",
          marginBottom: 14
        }}>
          <div style={{ fontSize: 16, opacity: 0.93 }}>Current Balance</div>
          <div style={{ fontSize: 34, fontWeight: 900, marginTop: 2 }}>₹{currentBalance}</div>
          <div style={{ color: "#caf5d1", fontSize: 15, marginTop: 8 }}>
            Your points or wallet cash
          </div>
        </div>
        {/* Plans */}
        <div style={{
          flex: 1,
          minWidth: 310,
          display: "flex",
          gap: 20,
          flexWrap: "wrap"
        }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: "#fff",
              borderRadius: 15,
              boxShadow: plan.recommended
                ? "0 4px 16px #43e97b33"
                : "0 1.5px 8px #5ba9f623",
              border: selected===plan.name
                ? "2px solid #1976d2"
                : "2px solid #f5f5fa",
              minWidth: 220,
              flex: "1 1 222px",
              padding: "22px 18px",
              position: "relative"
            }}>
              {plan.recommended && (
                <span style={{
                  position: "absolute",
                  top: 12, right: 12,
                  background: "linear-gradient(90deg, #1976d2, #43e97b)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "2px 13px",
                  borderRadius: 12,
                  letterSpacing: 1
                }}>Recommended</span>
              )}
              <div style={{
                fontSize: 19,
                fontWeight: 800,
                marginBottom: 10,
                color: "#1976d2"
              }}>{plan.name}</div>
              <div style={{
                fontSize: 23,
                fontWeight: 900,
                marginBottom: 10,
                color: selected===plan.name ? "#43e97b" : "#1976d2"
              }}>{plan.price}</div>
              <ul style={{
                fontSize: 15, color: "#297bb0", margin: "0 0 15px 0",
                padding: "0 0 0 18px"
              }}>
                {plan.features.map(f => (
                  <li key={f} style={{
                    marginBottom: 5
                  }}>{f}</li>
                ))}
              </ul>
              {selected === plan.name ? (
                <button style={{
                  width: "100%",
                  background: "linear-gradient(90deg,#1976d2 30%,#43e97b 90%)",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: "0 2px 10px #3ee97b30",
                  marginBottom: 6
                }}>Current Plan</button>
              ) : (
                <button
                  style={{
                    width: "100%",
                    background: "#f7fafe",
                    color: "#1976d2",
                    padding: "10px",
                    border: "1.6px solid #1976d2",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer"
                  }}
                  onClick={() => setSelected(plan.name)}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Upgrade"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Spending Chart */}
      <div style={{
        background: "#fff",
        boxShadow: "0 3px 16px #5ba6d41a",
        borderRadius: 16,
        padding: "22px 34px 10px 28px",
        maxWidth: 610,
        margin: "0 auto"
      }}>
        <div style={{ fontWeight: 700, fontSize: 17, color: "#1976d2", marginBottom: 8 }}>
          Last 6 Days' Spending
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={spending}>
            <CartesianGrid strokeDasharray="3 5" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 14, fill: "#1976d2" }} />
            <YAxis tick={{ fontSize: 13 }} axisLine={false} />
            <Tooltip
              itemStyle={{ color: "#1976d2" }}
              contentStyle={{
                borderRadius: 14,
                border: "1.5px solid #1976d2",
                background: "#fff",
                fontWeight: 600,
              }}
              labelStyle={{ fontWeight: 500 }}
              formatter={v => `₹${v}`}
            />
            <Line
              type="monotone"
              dataKey="spend"
              stroke="#43e97b"
              strokeWidth={3}
              dot={{ r: 7, stroke: "#1976d2", strokeWidth: 2 }}
              activeDot={{ r: 10, fill: "#1976d2" }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ textAlign: "right", color: "#1976d2", fontSize: 14, marginTop: -11 }}>
          Total: ₹{spending.reduce((sum, d) => sum + d.spend, 0)}
        </div>
      </div>
    </div>
  );
}