const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreText = document.querySelector("#playerScoreText");
const tieScoreText = document.querySelector("#tieScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

let player;
let computer;
let result;
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;
let roundCount = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    const roundResult = playRound();
    resultText.textContent = roundResult.result;
    playerScore = roundResult.playerScore;
    tieScore = roundResult.tieScore;
    computerScore = roundResult.computerScore;
    playerScoreText.textContent = `Player: ${playerScore}`;
    tieScoreText.textContent = `Tie: ${tieScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;

    roundCount++;
    if (roundCount === 11) {
      endGame();
    }
  })
);

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computer = "Rock";
      break;
    case 1:
      computer = "Paper";
      break;
    case 2:
      computer = "Scissors";
      break;
  }
}

function playRound() {
  let roundResult = {
    result: "",
    playerScore: playerScore,
    tieScore: tieScore,
    computerScore: computerScore,
  };

  if (player === computer) {
    roundResult.result = "It's a tie! Good luck next round";
    roundResult.tieScore++;
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    roundResult.result = "You Win!";
    roundResult.playerScore++; // Increment playerScore
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Rock")
  ) {
    roundResult.result = "You Lose!";
    roundResult.computerScore++; // Increment computerScore
  }

  return roundResult;
}

function endGame() {
  roundCount = 0;
  playerScore = 0;
  tieScore = 0;
  computerScore = 0;

  choiceBtns.forEach((button) => button.removeEventListener("click", () => {}));

  alert("Game Over!");

  // Reset text content
  playerScoreText.textContent = "Player: 0";
  tieScoreText.textContent = "Tie: 0";
  computerScoreText.textContent = "Computer: 0";
}

