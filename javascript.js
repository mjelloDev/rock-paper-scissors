function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
      break;
  }
}
console.log(getComputerChoice());

function getPlayerChoice() {
  let playerInput = prompt("What will you play?");
  let getPlayerChoice = playerInput.toLowerCase();
  console.log(getPlayerChoice);
  return getPlayerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie! Good luck next round");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
