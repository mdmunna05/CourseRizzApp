import { DataStore } from "aws-amplify/datastore";
import { Survey } from "./models";
import { useEffect } from "react";

export default function RecommendationScreen({ data, signOut }) {
  useEffect(() => {
    async function fetchSurveys() {
      const allSurveys = await DataStore.query(Survey);
      console.log("📌 All surveys from DynamoDB:", allSurveys);
    }
    fetchSurveys();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>🎯 Your Recommendations</h1>
      <p>Current Doing: {data.currentDoing}</p>
      <p>Main Goal: {data.mainGoal}</p>
      <p>Learning Styles: {data.learningStyles.join(", ")}</p>
      <p>Interests: {data.interests.join(", ")}</p>
      <p>Personal Goal: {data.personalGoal}</p>

      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
