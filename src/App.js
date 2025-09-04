import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";

// Screens
import IntroScreen from "./IntroScreen";
import SurveyScreen from "./SurveyScreen";
import RecommendationScreen from "./RecommendationScreen";

Amplify.configure(config);

function App({ signOut, user }) {
  const [step, setStep] = useState("intro");
  const [surveyData, setSurveyData] = useState({});

  const goToSurvey = () => setStep("survey");

  const goToRecommendation = (data) => {
    setSurveyData(data);
    setStep("recommendation");
  };

  return (
    <>
      {step === "intro" && <IntroScreen user={user} onContinue={goToSurvey} />}
      {step === "survey" && (
        <SurveyScreen onComplete={goToRecommendation} onBack={() => setStep("intro")} />
      )}
      {step === "recommendation" && (
        <RecommendationScreen data={surveyData} signOut={signOut} />
      )}
    </>
  );
}

export default withAuthenticator(App);
