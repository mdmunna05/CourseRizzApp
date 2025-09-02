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
    padding: "5vh 5vw",
    borderRadius: "20px",
    border: "1px solid #333",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    maxWidth: "90vw",
  },
  title: {
    fontSize: "clamp(2.5rem, 10vw, 6rem)", // Responsive font size
    fontWeight: "900",
    marginBottom: "1.5rem",
    color: "#fff",
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
  },
  subtitle: {
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    marginBottom: "2rem",
    color: "#ccc",
    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.2)",
  },
  button: {
    padding: "1rem 2.5rem",
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
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
    width: "clamp(100px, 15vw, 150px)",
    height: "clamp(100px, 15vw, 150px)",
    background: "rgba(74, 144, 226, 0.2)",
    borderRadius: "50%",
    zIndex: 1,
    animation: "float 6s ease-in-out infinite",
  },
  decorationCircleSmall: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "clamp(50px, 8vw, 80px)",
    height: "clamp(50px, 8vw, 80px)",
    background: "rgba(80, 227, 194, 0.2)",
    borderRadius: "50%",
    zIndex: 1,
    animation: "float 5s ease-in-out infinite",
  },
  decorationSquare: {
    position: "absolute",
    top: "50%",
    right: "10%",
    width: "clamp(80px, 12vw, 100px)",
    height: "clamp(80px, 12vw, 100px)",
    background: "rgba(255, 215, 0, 0.2)",
    transform: "rotate(45deg)",
    zIndex: 1,
    animation: "float 7s ease-in-out infinite",
  },
  bottomText: {
    position: "absolute",
    bottom: "5vh",
    width: "90%",
    textAlign: "center",
    color: "#ccc",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    opacity: 0.8,
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    margin: "0 auto",
  },
};