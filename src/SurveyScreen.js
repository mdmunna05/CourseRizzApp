import React, { useState } from "react";

export default function SurveyScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentDoing, setCurrentDoing] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [learningStyles, setLearningStyles] = useState([]);
  const [interests, setInterests] = useState([]);
  const [personalGoal, setPersonalGoal] = useState("");

  const steps = [
    {
      content: (
        <>
          <h2 style={styles.title}>Let’s personalize your learning!</h2>
          <p style={styles.subtitle}>
            Answer a few quick questions and we’ll suggest the best courses for you.
          </p>
          <button style={styles.nextButton} onClick={() => setCurrentStep(1)}>
            Start
          </button>
        </>
      ),
    },
    {
      question: "What are you currently doing?",
      options: ["🎓 Student", "💼 Working Professional", "👨‍💻 Freelancer", "🔍 Exploring"],
      value: currentDoing,
      onChange: setCurrentDoing,
    },
    {
      question: "What’s your main goal with learning?",
      options: ["🚀 Career Growth", "🧠 Learn New Skill", "💻 Job Preparation", "📈 Start a Business"],
      value: mainGoal,
      onChange: setMainGoal,
    },
    {
      question: "How do you like to learn?",
      multi: true,
      options: ["🎥 Video-based Learning", "📚 Reading & Notes", "🛠️ Hands-on Projects", "📝 Quizzes & Practice"],
      value: learningStyles,
      onChange: setLearningStyles,
    },
    {
      question: "Which subjects are you most interested in?",
      multi: true,
      options: ["💻 Programming", "📊 Data Science / AI", "🌐 Web Development", "📱 Mobile Apps", "🔒 Cybersecurity"],
      value: interests,
      onChange: setInterests,
    },
    {
      question: "Tell us in your own words what you want to achieve.",
      text: true,
      value: personalGoal,
      onChange: setPersonalGoal,
    },
    {
      content: (
        <>
          <h2 style={styles.title}>Thanks!</h2>
          <p style={styles.subtitle}>
            Based on your answers, we’ll suggest the best courses for you.
          </p>
          <button
            style={styles.nextButton}
            onClick={() =>
              onComplete({ currentDoing, mainGoal, learningStyles, interests, personalGoal })
            }
          >
            See My Recommendations
          </button>
        </>
      ),
    },
  ];

  const current = steps[currentStep];

  const handleNext = () => {
    if (current.text && !current.value.trim()) {
      alert("Please enter your goal.");
      return;
    }
    if (!current.text && !current.multi && current.options && !current.value) {
      alert("Please select an option.");
      return;
    }
    if (!current.text && current.multi && current.value.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <div style={styles.container}>
      {/* Decorative Elements */}
      <div style={styles.decorationCircleLarge}></div>
      <div style={styles.decorationCircleSmall}></div>
      <div style={styles.decorationSquare}></div>

      <div style={styles.card}>
        {current.content || (
          <>
            <h2 style={styles.title}>{current.question}</h2>
            {current.text ? (
              <textarea
                style={styles.textInput}
                rows={4}
                placeholder="e.g., I want to become a cloud engineer"
                value={current.value}
                onChange={(e) => current.onChange(e.target.value)}
              />
            ) : (
              current.options.map((opt) => (
                <button
                  key={opt}
                  style={{
                    ...styles.optionButton,
                    ...(current.multi
                      ? current.value.includes(opt)
                        ? styles.optionSelected
                        : {}
                      : current.value === opt
                      ? styles.optionSelected
                      : {}),
                  }}
                  onClick={() =>
                    current.multi
                      ? current.onChange(
                          current.value.includes(opt)
                            ? current.value.filter((v) => v !== opt)
                            : [...current.value, opt]
                        )
                      : current.onChange(opt)
                  }
                >
                  {opt}
                </button>
              ))
            )}
            <div style={{ marginTop: 20, textAlign: "left" }}>
              {currentStep > 0 && (
                <button style={styles.backButton} onClick={() => setCurrentStep(currentStep - 1)}>
                  Back
                </button>
              )}
              <button style={styles.nextButton} onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  card: {
    background: "#2a2a2a",
    padding: 24,
    borderRadius: "20px",
    maxWidth: 500,
    width: "100%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    zIndex: 5,
    border: "1px solid #333",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
  },
  subtitle: {
    fontSize: 15,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 28,
    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.2)",
  },
  optionButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "14px",
    borderRadius: "15px",
    marginBottom: 12,
    border: "1px solid #444",
    background: "#333",
    fontSize: 16,
    cursor: "pointer",
    justifyContent: "flex-start",
    transition: "background 0.3s ease, transform 0.3s ease",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  },
  optionSelected: {
    background: "linear-gradient(135deg, #4a90e2, #50e3c2)",
    borderColor: "#4a90e2",
    color: "#fff",
    transform: "scale(1.02)",
  },
  textInput: {
    width: "100%",
    border: "1px solid #444",
    borderRadius: "15px",
    padding: 14,
    fontSize: 16,
    minHeight: 80,
    outline: "none",
    marginBottom: 16,
    background: "#333",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  },
  nextButton: {
    background: "linear-gradient(135deg, #4a90e2, #50e3c2)",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "25px",
    fontSize: 16,
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    marginLeft: 0,
    boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
    transition: "transform 0.3s ease, background 0.3s ease",
    marginRight: 12,
  },
  backButton: {
    background: "#333",
    color: "#ccc",
    padding: "12px 30px",
    borderRadius: "25px",
    fontSize: 16,
    fontWeight: "600",
    border: "1px solid #444",
    cursor: "pointer",
    marginRight: 12,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, background 0.3s ease",
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
};