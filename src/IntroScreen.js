import React from "react";

export default function IntroScreen({ user, onContinue }) {
  return (
    <div style={styles.container}>
      <video
        autoPlay
        muted
        loop
        style={styles.video}
        src="/assets/intro.mp4" // Place video in public/assets folder
      />
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome {user.username} 👋</h1>
        <p style={styles.subtitle}>Let’s personalize your learning experience.</p>
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
    background: "rgba(0, 0, 0, 0.4)", // optional dark overlay for readability
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "40px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1rem",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};
