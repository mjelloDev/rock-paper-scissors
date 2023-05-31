// 1. Create function to get computer choice and assign it to string rock/paper/scissors
// 2. Create function to get player choice from the button they choose
// 3. Create function to compare player choice and computer choice
// 4. Make a loop while the score is lower than 5 to continue game

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playRound();
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
  if (player === computer) {
    return "It's a tie! Good luck next round";
  } else if (
    (player == "Rock" && computer == "Scissors") ||
    (player == "Paper" && computer == "Rock") ||
    (player == "Scissors" && computer == "Paper")
  ) {
    playerScore += 1;
    return "You Win!";
  } else if (
    (player == "Rock" && computer == "Paper") ||
    (player == "Paper" && computer == "Scissors") ||
    (player == "Scissors" && computer == "Rock")
  ) {
    computerScore += 1;
    return "You Lose!";
  }
}

// for (let gameScore = 0; gameScore < 5; gameScore++) {
//   playRound();
// }

// TODO: Make a 5-round game function
