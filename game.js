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
 * @returns {string} the outcome
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `It is a tie! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You have lost! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else {
    return `You have won! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }
}

function playGame() {
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Please enter your choice:");
    playerChoice = playerChoice.toLowerCase();

    //Check for valid input
    if (
      playerChoice &&
      (playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors")
    ) {
      let outcome = playRound(playerChoice, computerChoice);
      //console.log(outcome);
      alert(outcome);
    } else {
      console.log("Invalid input! Valid choices are: rock, paper, scissors");
      i--;
    }
  }
}

playGame();
