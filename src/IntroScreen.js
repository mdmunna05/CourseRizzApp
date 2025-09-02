import React from "react";

export default function IntroScreen({ onContinue }) {
  return (
    <div style={styles.container}>
      {/* Main Card */}
      <div style={styles.mainCard}>
        <h1 style={styles.title}>Courserizz</h1>
        <p style={styles.subtitle}>Your Learning Adventure Awaits</p>
        <button style={styles.button} onClick={onContinue}>
          🚀 Start Journey
        </button>
      </div>

      {/* Decorative Elements */}
      <div style={styles.decorationCircleLarge}></div>
      <div style={styles.decorationCircleSmall}></div>
      <div style={styles.decorationSquare}></div>
      <div style={styles.decorationStar}></div>

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
    background: "linear-gradient(135deg, #6b48ff, #ff4b4b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
  },
  mainCard: {
    textAlign: "center",
    zIndex: 5,
  },
  title: {
    fontSize: "4rem",
    fontWeight: "900",
    marginBottom: "10px",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "30px",
    color: "#fff",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
  },
  button: {
    padding: "15px 45px",
    fontSize: "1.2rem",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(135deg, #ff9800, #ff5722)",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  },
  decorationCircleLarge: {
    position: "absolute",
    top: "15%",
    right: "20%",
    width: "120px",
    height: "120px",
    background: "#ffca28",
    borderRadius: "50%",
    zIndex: 1,
    opacity: 0.6,
  },
  decorationCircleSmall: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "60px",
    height: "60px",
    background: "#cddc39",
    borderRadius: "50%",
    zIndex: 1,
    opacity: 0.6,
  },
  decorationSquare: {
    position: "absolute",
    top: "50%",
    right: "10%",
    width: "80px",
    height: "80px",
    background: "#f06292",
    transform: "rotate(45deg)",
    zIndex: 1,
    opacity: 0.6,
  },
  decorationStar: {
    position: "absolute",
    bottom: "20%",
    left: "20%",
    width: "50px",
    height: "50px",
    background: "#fff",
    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    zIndex: 1,
    opacity: 0.6,
  },
  bottomText: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: "1rem",
    opacity: 0.8,
  },
};