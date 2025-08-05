import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Logged in!");
    // You can redirect or authenticate here
  }

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        {/* Gradient Header */}
        <div style={styles.header}>
          <div style={{ flex: 1 }} />
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            fontSize: 14,
            color: "#fff",
          }}>
            <span>Don't have an account?</span>
            <button style={styles.getStartedBtn}>Get Started</button>
          </div>
          <div style={{ height: 20 }} />
        </div>

        {/* Title */}
        <div style={{ marginTop: -40, textAlign: "center", marginBottom: 20 }}>
          <h2 style={{
            color: "#542feb",
            fontWeight: 800,
            fontSize: 32,
            letterSpacing: 1,
            marginBottom: 10,
          }}>
            Samsung
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "0 24px" }}>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Welcome Back</div>
          <div style={{ color: "#8d95ad", marginBottom: 24 }}>
            Enter your details below
          </div>

          {/* Email */}
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          {/* Password */}
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {/* Sign in */}
          <button type="submit" style={styles.signInBtn}>
            Sign in
          </button>
        </form>

        {/* Forgot / Or sign in with */}
        <div style={{
          textAlign: "center",
          margin: "16px 0 0 0",
          color: "#6d7b9c",
          fontSize: 14,
        }}>
          <a href="#" style={{ color: "#7367f0", textDecoration: "none" }}>Forgot your password?</a>
        </div>

        <div style={{
          textAlign: "center",
          margin: "24px 0 10px 0",
          color: "#b4bed4",
          fontSize: 14,
        }}>
          Or sign in with
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginBottom: 20,
        }}>
          <button type="button" style={styles.socialBtn}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" style={styles.socialIcon} />
            Google
          </button>
          <button type="button" style={styles.socialBtn}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" style={styles.socialIcon} />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

const GRADIENT = "linear-gradient(135deg,#7460f3 45%,#45c3ea 100%)";

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#e9edfb 40%,#e2f7fa 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 360,
    background: "#fff",
    borderRadius: 28,
    boxShadow: "0 10px 24px 0 rgba(114,111,255,0.10), 0 1.5px 15px #cfdeef55",
    overflow: "hidden",
    position: "relative",
    paddingBottom: 24,
  },
  header: {
    width: "100%",
    background: GRADIENT,
    height: 125,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: "30px 22px 8px 22px",
    marginBottom: 0,
  },
  getStartedBtn: {
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    border: "none",
    borderRadius: 18,
    padding: "5px 18px",
    fontWeight: 600,
    cursor: "pointer",
  },
  label: {
    display: "block",
    fontWeight: 500,
    fontSize: 15,
    color: "#373b53",
    margin: "7.5px 0 5px 0",
  },
  input: {
    width: "100%",
    padding: "11px 13px",
    borderRadius: 10,
    border: "1.5px solid #e3e6ea",
    outline: "none",
    fontSize: 15,
    marginBottom: 14,
    background: "#f7f9fa",
  },
  signInBtn: {
    width: "100%",
    padding: "11px 0",
    margin: "22px 0 0 0",
    background: "linear-gradient(90deg,#7460f3 20%,#45c3ea 100%)",
    color: "#fff",
    fontWeight: 700,
    border: "none",
    borderRadius: 9,
    fontSize: 17,
    letterSpacing: 1,
    cursor: "pointer",
    boxShadow: "0 2px 11px #c8d0e8a6",
  },
  socialBtn: {
    flex: 1,
    fontWeight: 600,
    fontSize: 15,
    border: "1.5px solid #e3e6ea",
    borderRadius: 8,
    padding: "7px 12px 7px 8px",
    background: "#fff",
    color: "#515976",
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  socialIcon: {
    width: 22, height: 22, objectFit: "cover", marginRight: 3,
  },
};
