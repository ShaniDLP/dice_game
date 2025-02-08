// src/components/PlayerPanel.js
import React from "react";
import "../styles/PlayerPanel.css";

const PlayerPanel = ({ player, score, roundScore, winCount, isActive }) => {
  return (
    <div className="player-panel-wrapper">
      <div className={`player-panel ${isActive ? "active" : ""}`}>
        <h2>Player {player + 1}</h2>
        <p>Total Score: {score}</p>
        <p>Current Round: {roundScore}</p>
      </div>
      {isActive && <div className="turn-indicator-outside">Your Turn!</div>}
      <div className="win-count">Wins: {winCount}</div>
    </div>
  );
};

export default PlayerPanel;
