// src/components/DiceRoll.js
import React from "react";
import "../styles/DiceRoll.css";

const DiceRoll = ({ dice }) => {
  return (
    <div className="dice-roll">
      <div className="dice">
        <span>{dice[0]}</span>
      </div>
      <div className="dice">
        <span>{dice[1]}</span>
      </div>
    </div>
  );
};

export default DiceRoll;
