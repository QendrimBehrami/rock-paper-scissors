function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return null;
  }
}

/**
 * Play one round of Rock-Paper-Scissors
 * @param {string} playerSelection
 * @param {string} computerSelection
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log(`It is a tie! You both chose ${playerSelection}`);
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      `You have lost! You chose ${playerSelection} and the computer chose ${computerSelection}`
    );
  } else {
    console.log(
      `You have won! You chose ${playerSelection} and the computer chose ${computerSelection}`
    );
  }
}
