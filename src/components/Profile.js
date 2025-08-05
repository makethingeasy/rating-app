import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: "Anil Gupta",
    username: "anilg92",
    companyName: "Acme Innovations Pvt Ltd",
    email: "anil@acme.com",
    phone: "+91 9876543210",
    role: "Product Manager",
    address: "402, Tower B, Tech Park, HSR Layout, Bengaluru, India, 560102",
    about: "Passionate SaaS professional. Loves product design, analytics, and building scalable teams.",
    joined: "2023-04-24",
    website: "https://acme.com"
  });

  const qrCodeRef = useRef();

  // The QR code encodes a vCard format with key details (could also use a URL with a unique ID)
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${profileData.fullName}
ORG:${profileData.companyName}
TITLE:${profileData.role}
TEL:${profileData.phone}
EMAIL:${profileData.email}
ADR:${profileData.address}
URL:${profileData.website}
END:VCARD
`.trim();

  const downloadQR = () => {
    const canvas = qrCodeRef.current.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `${profileData.username}-profile-qr.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: "36px auto",
      background: "#ffffff",
      borderRadius: 17,
      boxShadow: "0 8px 32px #2222e122,0 1.5px 15px #aec7fa20",
      padding: 0
    }}>
      {/* Header section */}
      <div style={{
        background: "linear-gradient(90deg,#1976d2 50%,#00c6fb 100%)",
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        padding: "32px 36px 22px 36px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 26
      }}>
        <img
          src="https://randomuser.me/api/portraits/men/64.jpg"
          alt={profileData.fullName}
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            border: "4px solid #fff",
            boxShadow: "0 3px 10px #1976d210"
          }}
        />
        <div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1.1, marginBottom: 2 }}>
            {profileData.fullName}
          </div>
          <div style={{ fontSize: 17, opacity: 0.93, fontWeight: 600 }}>
            {profileData.role} @ {profileData.companyName}
          </div>
          <div style={{ fontSize: 14, color: "#d7fffd" }}>
            Username: <span style={{ opacity: 0.9 }}>{profileData.username}</span>  |  Joined: {profileData.joined}
          </div>
        </div>
      </div>

      {/* Details + QR Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "space-between",
        padding: "34px 36px 32px 36px"
      }}>
        {/* Details */}
        <div style={{ flex: 2, minWidth: 240 }}>
          <table style={{ fontSize: 16, width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={tdLabel}>Email:</td>
                <td><a href={`mailto:${profileData.email}`} style={link}>{profileData.email}</a></td>
              </tr>
              <tr>
                <td style={tdLabel}>Phone:</td>
                <td><a href={`tel:${profileData.phone}`} style={link}>{profileData.phone}</a></td>
              </tr>
              <tr>
                <td style={tdLabel}>Address:</td>
                <td>{profileData.address}</td>
              </tr>
              <tr>
                <td style={tdLabel}>Website:</td>
                <td>
                  <a href={profileData.website} style={link} target="_blank" rel="noopener noreferrer">{profileData.website}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{
            marginTop: 22,
            background: "#f6fdff",
            borderRadius: 10,
            padding: "13px 16px",
            color: "#323a4e",
            fontSize: 15,
            lineHeight: 1.7
          }}>
            <b>About:</b><br />
            {profileData.about}
          </div>
        </div>

        {/* QR code box */}
        <div ref={qrCodeRef} style={{
          flex: 1,
          minWidth: 168,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            background: "rgba(239,252,255,0.85)",
            borderRadius: 17,
            boxShadow: "0 3px 12px #18b6df13",
            padding: 18,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <span style={{
              fontSize: 16,
              color: "#1976d2",
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: "0.4px"
            }}>Digital Profile QR</span>
            <QRCodeCanvas value={vcard} size={140} fgColor="#1976d2" bgColor="#fff" />
          </div>
          <button
            onClick={downloadQR}
            style={{
              background: "linear-gradient(90deg, #1976d2 20%, #00c6fb 90%)",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              borderRadius: 8,
              padding: "8px 21px",
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 1.5px 6px #1976d248"
            }}
          >
            Download QR Code
          </button>
          <div style={{ fontSize: 13.5, color: "#8688aa", marginTop: 6, textAlign: "center" }}>
            Share this QR for quick vCard/contact sharing
          </div>
        </div>
      </div>
    </div>
  );
}

const tdLabel = {
  fontWeight: 600,
  color: "#426cc7",
  fontSize: 15,
  padding: "7px 9px 7px 0",
  verticalAlign: "top"
};

const link = {
  color: "#1976d2",
  textDecoration: "underline",
  fontWeight: 500,
};
