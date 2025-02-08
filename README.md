# Two-Dice Game

## Overview

Two-Dice is a simple, fun two-player dice game built with React. In this game, two players take turns rolling two dice. The game logic is as follows:

- **Roll Dice:**  
  When a player clicks the "Roll Dice" button, the two dice are rolled and the player's current round score is set to the sum of the dice. (The score from the previous roll is replaced, not accumulated.)

- **Double Sixes Rule:**  
  If both dice show a 6, the player's current round score is lost. A toast popup appears for 2 seconds notifying the player, and the turn ends.

- **Hold:**  
  When the player clicks "Hold," the current round score is added to their total score.  
  - If the total score is below the target score (default is 100, but this can be changed via the input field), the turn switches to the other player.
  - If the total score meets or exceeds the target score, the player wins, a winning toast is shown, and the game ends immediately.

- **Win Tracking & Persistence:**  
  The game tracks the number of wins for each player. All scores, the active player, and win counts are persisted using local storage so that the game state remains even after a browser refresh.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher is recommended)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ShaniDLP/dice_game
   cd my-game
   ```

 2. **Install Dependencies:**

Run the following command to install all necessary dependencies, including React and react-toastify: 
```bash
npm install
```
3. **Running the Project**
Start the application:

```
npm start
```

The game will be available on `http://localhost:3000`.

<img width="1453" alt="Image" src="https://github.com/user-attachments/assets/4db15929-4454-4d6a-909e-9a9808e23394" />

   
