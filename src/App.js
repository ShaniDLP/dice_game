import React, { useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import { useGameLogic } from "./hooks"; 
import { DEFAULT_RULES } from "./gameRules";

import { DiceRoll, PlayerPanel, GameControls, RuleSettings, ResetModal } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [rules, setRules] = useState(DEFAULT_RULES);
  const {
    playerScores,
    roundScore,
    activePlayer,
    dice,
    gameOver,
    winCounts,
    rollDice,
    hold,
    newGame,
  } = useGameLogic(rules);
  const [showResetModal, setShowResetModal] = useState(false);

  const updateTargetScore = (score) => {
    setRules({ ...rules, targetScore: score });
    newGame(); 
  };

  const openResetModal = () => {
    setShowResetModal(true);
  };

  const closeResetModal = () => {
    setShowResetModal(false);
  };

  const confirmReset = () => {
    newGame();
    closeResetModal();
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <ToastContainer />
      <div className="player-container">
        <PlayerPanel
          player={0}
          score={playerScores[0]}
          roundScore={activePlayer === 0 ? roundScore : 0}
          winCount={winCounts[0]}
          isActive={activePlayer === 0}
        />
        <PlayerPanel
          player={1}
          score={playerScores[1]}
          roundScore={activePlayer === 1 ? roundScore : 0}
          winCount={winCounts[1]}
          isActive={activePlayer === 1}
        />
      </div>
      <DiceRoll dice={dice} />
      <GameControls
        rollDice={rollDice}
        hold={hold}
        newGame={openResetModal}
        gameOver={gameOver}
      />
      <RuleSettings rules={rules} updateTargetScore={updateTargetScore} />
      {showResetModal && (
        <ResetModal
          message="Are you sure you want to start a new game? Your current progress will be lost."
          onConfirm={confirmReset}
          onCancel={closeResetModal}
        />
      )}
      {gameOver && (
        <div className="winner">
          <h2>Player {activePlayer + 1} wins!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
