import React from "react";

export default function IntroScreen({ onContinue }) {
  return (
    <div style={styles.container}>
      {/* Main Card */}
      <div style={styles.mainCard}>
        <h1 style={styles.title}>CourseRizz</h1>
        <p style={styles.subtitle}>Your Learning Adventure Awaits</p>
        <button style={styles.button} onClick={onContinue}>
          🚀 Start
        </button>
      </div>

      {/* Decorative Elements */}
      <div style={styles.decorationCircleLarge}></div>
      <div style={styles.decorationCircleSmall}></div>
      <div style={styles.decorationSquare}></div>

      {/* Bottom Text */}
      <p style={styles.bottomText}>
        Discover, learn, and grow with interactive courses designed just for you
      </p>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  mainCard: {
    textAlign: "center",
    zIndex: 5,
    background: "#2a2a2a",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #333",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: "6rem",
    fontWeight: "900",
    marginBottom: "10px",
    color: "#fff",
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "30px",
    color: "#ccc",
    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.2)",
  },
  button: {
    padding: "15px 45px",
    fontSize: "1.2rem",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(135deg, #4a90e2, #50e3c2)",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
    transition: "transform 0.3s ease, background 0.3s ease",
    fontWeight: "600",
  },
  decorationCircleLarge: {
    position: "absolute",
    top: "15%",
    right: "20%",
    width: "150px",
    height: "150px",
    background: "rgba(74, 144, 226, 0.2)",
    borderRadius: "50%",
    zIndex: 1,
    animation: "float 6s ease-in-out infinite",
  },
  decorationCircleSmall: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "80px",
    height: "80px",
    background: "rgba(80, 227, 194, 0.2)",
    borderRadius: "50%",
    zIndex: 1,
    animation: "float 5s ease-in-out infinite",
  },
  decorationSquare: {
    position: "absolute",
    top: "50%",
    right: "10%",
    width: "100px",
    height: "100px",
    background: "rgba(255, 215, 0, 0.2)",
    transform: "rotate(45deg)",
    zIndex: 1,
    animation: "float 7s ease-in-out infinite",
  },
  bottomText: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    textAlign: "center",
    color: "#ccc",
    fontSize: "1rem",
    opacity: 0.8,
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
  },
};