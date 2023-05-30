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
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "sciccors" && computerSelection === "paper")
  ) {
    alert("You win!");
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    alert("You lose!");
  else {
    alert("I break!");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
