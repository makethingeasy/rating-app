import React, { useState, useEffect } from "react";

const badReviews = [
  {
    id: 1,
    user: "Ravi Kumar",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    contact: "+91 9801234567",
    email: "ravi@email.com",
    date: "2025-08-03",
    rating: 1,
    content: "Product arrived late and support didn’t help.",
    status: "Pending",
  },
  {
    id: 2,
    user: "Rebecca Lee",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    contact: "+91 9745654123",
    email: "rebecca@email.com",
    date: "2025-08-05",
    rating: 2,
    content: "Service was confusing. I want a refund.",
    status: "Resolved",
  },
];

const colors = { Pending: "#f57c00", Resolved: "#43a047", Contacted: "#1976d2" };

function Star({ filled }) {
  return (
    <span style={{ color: filled ? "#eab308" : "#ececec", fontSize: 22, marginRight: 2 }}>
      ★
    </span>
  );
}

export default function ReviewList() {
  const [filter, setFilter] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredReviews = badReviews.filter(
    (r) =>
      r.user.toLowerCase().includes(filter.toLowerCase()) ||
      r.content.toLowerCase().includes(filter.toLowerCase())
  );

  if (isMobile) {
    // Mobile view: stacked cards for each review
    return (
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px 12px" }}>
        <h2 style={{ color: "#e53935", fontWeight: 700, marginBottom: 18, letterSpacing: 1 }}>
          <span
            style={{
              background: "#ffebee",
              color: "#e53935",
              padding: "6px 17px",
              borderRadius: 30,
              fontWeight: 900,
              fontSize: 17,
              marginRight: 10,
            }}
          >
            !
          </span>
          Customer Complaints & Bad Reviews
        </h2>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search user, review, or status…"
          style={{
            padding: "10px 15px",
            borderRadius: 9,
            border: "1.5px solid #e4eaf0",
            fontSize: 16,
            width: "100%",
            marginBottom: 16,
            background: "#f7fafe",
            outline: "none",
          }}
        />
        <span style={{ color: "#888", fontSize: 15, marginBottom: 20, display: "block" }}>
          {filteredReviews.length} result{filteredReviews.length !== 1 ? "s" : ""}
        </span>

        {filteredReviews.length === 0 && (
          <p style={{ textAlign: "center", color: "#aaa" }}>No bad reviews found.</p>
        )}

        {filteredReviews.map((r) => (
          <div
            key={r.id}
            style={{
              background: "#fff",
              borderRadius: 15,
              boxShadow: "0 4px 18px #1976d229",
              marginBottom: 24,
              padding: 20,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <img
                src={r.avatar}
                alt={r.user}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 2px 6px #1976d210",
                  border: "2.5px solid #f1f1f6",
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{r.user}</div>
                <a
                  href={`mailto:${r.email}`}
                  style={{ fontSize: 14, color: "#3a46a0", textDecoration: "underline" }}
                >
                  Email
                </a>
              </div>
            </div>

            <div
              style={{
                fontSize: 15,
                color: "#2a2b35",
                marginBottom: 12,
                minHeight: 50,
                whiteSpace: "pre-wrap",
              }}
            >
              {r.content}
            </div>

            <div style={{ marginBottom: 12, fontWeight: 600 }}>
              <span
                style={{
                  display: "inline-flex",
                  verticalAlign: "middle",
                  marginRight: 8,
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star filled={i < r.rating} key={i} />
                ))}
              </span>
              <span style={{ color: "#e53935", fontSize: 18, fontWeight: 800 }}>
                {r.rating}
              </span>
            </div>

            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  display: "inline-block",
                  background: colors[r.status] + "22",
                  color: colors[r.status],
                  padding: "6px 16px",
                  borderRadius: 18,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                {r.status}
              </span>
              <span style={{ float: "right", fontSize: 13, color: "#555" }}>{r.date}</span>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => alert(`Contact ${r.user}`)}
                style={{
                  flex: 1,
                  minWidth: 120,
                  background: "linear-gradient(90deg,#1976d2 50%,#43e97b 100%)",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Contact
              </button>
              <button
                onClick={() => alert("Mark as resolved")}
                style={{
                  flex: 1,
                  minWidth: 120,
                  background: "#f5f5fd",
                  color: "#2f54eb",
                  border: "1.3px solid #dae3ff",
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Mark Resolved
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop: Show table as before with horizontal scroll on smaller width
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "32px 16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 15,
          boxShadow: "0 4px 18px #1976d229",
          padding: "32px 34px 24px 34px",
          marginBottom: 32,
          overflowX: "auto",
        }}
      >
        <h2
          style={{
            color: "#e53935",
            fontWeight: 700,
            margin: 0,
            marginBottom: 18,
            letterSpacing: 1,
          }}
        >
          <span
            style={{
              background: "#ffebee",
              color: "#e53935",
              padding: "6px 17px",
              borderRadius: 30,
              fontWeight: 900,
              fontSize: 17,
              marginRight: 10,
            }}
          >
            !
          </span>
          Customer Complaints & Bad Reviews
        </h2>
        <div
          style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 12 }}
        >
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search user, review, or status…"
            style={{
              padding: "8px 15px",
              borderRadius: 9,
              border: "1.5px solid #e4eaf0",
              fontSize: 16,
              width: 280,
              background: "#f7fafe",
              outline: "none",
            }}
          />
          <span style={{ color: "#888", fontSize: 15 }}>
            {filteredReviews.length} result{filteredReviews.length !== 1 ? "s" : ""}
          </span>
        </div>
        <table
          style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, minWidth: 700 }}
        >
          <thead>
            <tr style={{ color: "#757575", fontSize: 15, background: "#f8f8fb" }}>
              <th style={th}>USER</th>
              <th style={th}>DATE</th>
              <th style={th}>RATING</th>
              <th style={th}>REVIEW</th>
              <th style={th}>STATUS</th>
              <th style={th}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: 32, color: "#aaa" }}>
                  No bad reviews found.
                </td>
              </tr>
            )}
            {filteredReviews.map((r) => (
              <tr key={r.id} style={{ borderBottom: "1px solid #f1f2fa" }}>
                {/* USER */}
                <td style={td}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src={r.avatar}
                      alt={r.user}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 6px #1976d210",
                        border: "2.5px solid #f1f1f6",
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{r.user}</div>
                      <a
                        href={`mailto:${r.email}`}
                        style={{
                          fontSize: 14,
                          color: "#3a46a0",
                          textDecoration: "underline",
                        }}
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </td>
                {/* DATE */}
                <td style={td}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#f3f5f8",
                      color: "#323d4d",
                      padding: "5px 14px",
                      borderRadius: 8,
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    {r.date}
                  </span>
                </td>
                {/* STARS */}
                <td style={td}>
                  <div>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star filled={i < r.rating} key={i} />
                    ))}
                    <span
                      style={{
                        color: "#e53935",
                        fontSize: 17,
                        fontWeight: 800,
                        marginLeft: 3,
                      }}
                    >
                      {r.rating}
                    </span>
                  </div>
                </td>
                {/* CONTENT */}
                <td style={td}>
                  <span style={{ fontSize: 15, color: "#2a2b35" }}>{r.content}</span>
                </td>
                {/* STATUS */}
                <td style={td}>
                  <span
                    style={{
                      display: "inline-block",
                      background: colors[r.status] + "22",
                      color: colors[r.status],
                      padding: "5px 15px",
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {r.status}
                  </span>
                </td>
                {/* ACTIONS */}
                <td style={td}>
                  <button
                    onClick={() => alert(`Contact ${r.user}`)}
                    style={{
                      background: "linear-gradient(90deg,#1976d2 50%,#43e97b 100%)",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      padding: "8px 19px",
                      borderRadius: 7,
                      fontWeight: 600,
                      fontSize: 15,
                      marginRight: 7,
                    }}
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => alert("Mark as resolved")}
                    style={{
                      background: "#f5f5fd",
                      color: "#2f54eb",
                      border: "1.3px solid #dae3ff",
                      cursor: "pointer",
                      padding: "8px 15px",
                      borderRadius: 7,
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    Mark Resolved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th = {
  padding: "12px 7px",
  textAlign: "left",
  fontWeight: 700,
  borderBottom: "2.5px solid #eaeaea",
};

const td = {
  padding: "12px 7px",
  borderBottom: "1px solid #f1f2fa",
  verticalAlign: "middle",
};
