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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
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
