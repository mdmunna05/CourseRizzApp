import React from "react";

export default function RecommendationScreen({ data, signOut }) {
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
