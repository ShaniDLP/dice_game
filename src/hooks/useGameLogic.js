import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import usePersistedState from "./usePersistedState";

function useGameLogic(rules) {
  const [playerScores, setPlayerScores] = usePersistedState("playerScores", [0, 0]);
  const [activePlayer, setActivePlayer] = usePersistedState("activePlayer", 0);
  const [winCounts, setWinCounts] = usePersistedState("winCounts", [0, 0]);
  const [roundScore, setRoundScore] = useState(0);
  const [dice, setDice] = useState([1, 1]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    localStorage.setItem("playerScores", JSON.stringify(playerScores));
  }, [playerScores]);

  useEffect(() => {
    localStorage.setItem("activePlayer", JSON.stringify(activePlayer));
  }, [activePlayer]);

  useEffect(() => {
    localStorage.setItem("winCounts", JSON.stringify(winCounts));
  }, [winCounts]);

  const endTurn = useCallback(() => {
    setRoundScore(0);
    setActivePlayer((prev) => (prev === 0 ? 1 : 0));
  }, [setActivePlayer]);

  const rollDice = useCallback(() => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    setDice([d1, d2]);
    if (d1 === 6 && d2 === 6) {
      toast.error("Double sixes! You lose your round's score.", { autoClose: 2000 });
      setTimeout(() => {
        setRoundScore(0);
        endTurn();
      }, 2000);
      return;
    } else {
      setRoundScore(d1 + d2);
    }
  }, [endTurn]);

  const hold = useCallback(() => {
    if (gameOver) return;
    const newScores = [...playerScores];
    newScores[activePlayer] += roundScore;
    if (newScores[activePlayer] >= rules.targetScore) {
      setPlayerScores(newScores);
      setWinCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[activePlayer] += 1;
        return newCounts;
      });
      setGameOver(true);
      toast.success(`Player ${activePlayer + 1} wins!`, { autoClose: 2000 });
    } else {
      setPlayerScores(newScores);
      endTurn();
    }
  }, [gameOver, playerScores, activePlayer, roundScore, rules.targetScore, endTurn, setPlayerScores, setWinCounts]);

  const newGame = useCallback(() => {
    setPlayerScores([0, 0]);
    setRoundScore(0);
    setActivePlayer(0);
    setDice([1, 1]);
    setGameOver(false);
  }, [setPlayerScores, setActivePlayer]);

  return {
    playerScores,
    roundScore,
    activePlayer,
    dice,
    gameOver,
    winCounts,
    rollDice,
    hold,
    newGame,
  };
}

export default useGameLogic;
