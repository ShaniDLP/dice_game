// src/components/GameControls.js
import React from "react";
import "../styles/GameControls.css";
import { RollDiceIcon, HoldIcon, NewGameIcon } from "./Icons";

const GameControls = ({ rollDice, hold, newGame, gameOver }) => {
  return (
    <div className="game-controls">
      {!gameOver && (
        <button onClick={rollDice}>
          <RollDiceIcon />
          Roll Dice
        </button>
      )}
      {!gameOver && (
        <button onClick={hold}>
          <HoldIcon />
          Hold
        </button>
      )}
      <button onClick={newGame}>
        <NewGameIcon />
        New Game
      </button>
    </div>
  );
};

export default GameControls;
