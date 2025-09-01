import React from "react";

export default function IntroScreen({ user, onContinue }) {
  return (
    <div style={styles.container}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
      >
        <source src="/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome {user.username} 👋</h1>
        <p style={styles.subtitle}>
          Let’s personalize your learning experience.
        </p>
        <button style={styles.button} onClick={onContinue}>
          Start Survey
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif", // modern font
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "rgba(0, 0, 0, 0.55)", // darker overlay for readability
    padding: "20px",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "40px",
    maxWidth: "600px",
    lineHeight: "1.5",
  },
  button: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.3s ease",
  },
};

// Add Google Font (Poppins) in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
