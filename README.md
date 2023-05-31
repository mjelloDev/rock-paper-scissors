# Rock Paper Scissors Game

This project aim is to demonstrate and train my understanding on basic Javascript.
The project is to make a Rock-Paper-Scissor Game from scratch based on The Odin Projects curriculum.

This is a simple Rock Paper Scissors game implemented using JavaScript, HTML, and CSS.

## Technologies/Stack/Languages Used

- JavaScript: The game logic and functionality are implemented using JavaScript. It handles player's and computer's choices, determines the round result, updates scores, and manages the game flow.
- HTML: The HTML file (`index.html`) provides the structure and layout for the game interface. It includes elements for displaying player and computer choices, result text, scores, and buttons for selecting player's choice.
- CSS: The CSS file (`styles.css`) contains styles and formatting rules to enhance the visual appearance of the game interface.

## JavaScript Code

The JavaScript code (`javascript.js`) implements the game logic and functionality. It contains the following functions and variables:

- `const playerText`, `computerText`, `resultText`, `choiceBtns`, `playerScoreText`, `tieScoreText`, `computerScoreText`: Variables to store references to DOM elements.
- `let player`, `let computer`, `let result`, `let playerScore`, `let tieScore`, `let computerScore`, `let roundCount`: Variables to store game state.
- `choiceBtns.forEach`: Adds event listeners to the choice buttons. When a button is clicked, it triggers the game logic.
- `getComputerChoice()`: Generates a random choice for the computer (Rock, Paper, or Scissors).
- `playRound()`: Compares the player's and computer's choices to determine the round result. It updates the scores accordingly.
- `endGame()`: Resets the game state and displays a game over message.

## HTML and CSS Files

- `index.html`: This file defines the structure of the game interface. It includes elements for player and computer choices, result text, scores, and buttons for selecting player's choice.
- `styles.css`: The CSS file contains styles and formatting rules to customize the appearance of the game interface. It is used to enhance the visual presentation of the HTML elements.

You can find the HTML and CSS files in the repository along with the JavaScript code.

Feel free to explore and have fun playing Rock Paper Scissors!

## License

[MIT](https://choosealicense.com/licenses/mit/)
