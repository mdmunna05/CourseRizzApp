import React from "react";

export default function IntroScreen({ user, onContinue }) {
  // Safely get email from Cognito user object
  const email =
    user?.attributes?.email || // Normal case
    user?.signInUserSession?.idToken?.payload?.email || // Sometimes stored in token payload
    null;

  // Show prefix of email, fallback to username or "User"
  const displayName = email
    ? email.split("@")[0]
    : user?.username || "User";

  return (
    <div style={styles.container}>
      {/* Background Video */}
      <video autoPlay muted loop playsInline style={styles.video}>
        <source src="/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome..! {displayName} 👋</h1>
          <p style={styles.subtitle}>
            Let’s personalize your learning experience.
          </p>
          <button style={styles.button} onClick={onContinue}>
            🚀 Start Survey
          </button>
        </div>
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
    fontFamily: "'Poppins', sans-serif",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "40px 60px",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    color: "#e0e0e0",
    lineHeight: "1.5",
  },
  button: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
};
