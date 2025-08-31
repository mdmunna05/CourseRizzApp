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
            <div style={{ marginTop: 20 }}>
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
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    maxWidth: 500,
    width: "100%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 28,
  },
  optionButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "14px",
    borderRadius: 12,
    marginBottom: 12,
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: 16,
    cursor: "pointer",
    justifyContent: "flex-start",
    transition: "0.2s",
  },
  optionSelected: {
    backgroundColor: "#e6e6e6",
    borderColor: "#000",
  },
  textInput: {
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    minHeight: 80,
    outline: "none",
    marginBottom: 16,
  },
  nextButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    marginLeft: 8,
  },
  backButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "12px 20px",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "600",
    border: "1px solid #ccc",
    cursor: "pointer",
    marginRight: 8,
  },
};
