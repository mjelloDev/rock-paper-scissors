// 1. Create function to get computer choice and assign it to string rock/paper/scissors
// 2. Create function to get player choice from the button they choose
// 3. Create function to compare player choice and computer choice
// 4. Make a loop while the score is lower than 5 to continue game

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
console.log(getComputerChoice());

// console.log(playRound(playerSelection, computerSelection));

// function getPlayerChoice() {
//   let playerInput = prompt("What will you play?");
//   let getPlayerChoice = playerInput.toLowerCase();
//   console.log(getPlayerChoice);
//   return getPlayerChoice;
// }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Good luck next round";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "sciccors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "You lose!";
  } else {
    return "I break!";
  }
}
// TODO: Fix the playRound function

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
