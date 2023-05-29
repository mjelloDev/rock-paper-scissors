function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) "rock";
  else if (choice === 1) "paper";
  else "scissors";
}
