import React from "react";
import { useNavigate } from "react-router-dom";

function Pnf() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fdf6f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "7rem",
          color: "#8B4513",
          marginBottom: "1rem",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#5a3825",
        }}
      >
        Oops! Page Not Found
      </h2>
      <p
        style={{
          color: "#7b6650",
          marginBottom: "2rem",
          fontSize: "1.1rem",
          maxWidth: "500px",
        }}
      >
        Looks like this page is missing from our library shelves.  
        Maybe it’s been moved to a new section?
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 25px",
          backgroundColor: "#8B4513",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#6f3610")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B4513")}
      >
        Back to BookStore
      </button>
    </div>
  );
}

export default Pnf;
