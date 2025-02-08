export const DEFAULT_RULES = {
    targetScore: 100,          // Default target score
    snakeEyesLossAll: true,    // When both dice equal snakeEyeValue, lose entire score
    loseRoundOnAnyOne: true,   // If either die equals snakeEyeValue, lose the round's score
    doubleRollBonus: true,     // If both dice show the same (other than snake eyes), double the roll's score
    snakeEyeValue: 1,          // The value that counts as a "bad roll" – developer can change this easily
  };