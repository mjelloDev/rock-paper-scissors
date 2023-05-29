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
  let player = prompt("What will you play?");
  return player.toLowerCase();
}
console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie! Good luck next round");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("Paper beat rock! You win! Wow");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("Rock kill you! Poor scissor, so weak!");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
