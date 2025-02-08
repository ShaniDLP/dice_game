// src/components/RuleSettings.js
import React from "react";
import "../styles/RuleSettings.css";

const RuleSettings = ({ rules, updateTargetScore }) => {
  return (
    <div className="rule-settings">
      <label htmlFor="targetScoreInput">Set Winning Score:</label>
      <input
        id="targetScoreInput"
        type="number"
        value={rules.targetScore}
        onChange={(e) => updateTargetScore(Number(e.target.value))}
        min="1"
      />
    </div>
  );
};

export default RuleSettings;
