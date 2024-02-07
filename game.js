const FINAL_SCORE = 5;
/**
 * Randomly generate a computer choice
 * @returns random choice
 */
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

// Console based version
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

function playGameUI(playerSelection) {
  // Display the outcome
  let outcome = playRound(playerSelection, getComputerChoice());
  console.log(outcome);
  let outcomeElement = document.querySelector("#outcome");

  outcomeElement.textContent = outcome;

  // Compute score
  let scoreElement;
  let computerScore = document.querySelector("#computerScore");
  let playerScore = document.querySelector("#playerScore");

  if (outcome.includes("lost")) {
    scoreElement = computerScore;
  } else if (outcome.includes("won")) {
    scoreElement = playerScore;
  } else {
    return; // Nothing to do if tie
  }

  scoreElement.textContent++;

  // Check if game is over
  // Game continues after winner is decided, this is intentional
  if (scoreElement.textContent == FINAL_SCORE) {
    let resultElement = document.querySelector("#result");
    if (parseInt(playerScore) > parseInt(computerScore)) {
      resultElement.textContent = "YOU HAVE WON!";
    } else {
      resultElement.textContent = "YOU HAVE LOST!";
    }
  }
}

//playGame();

// Get player selection from buttons
let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function (e) {
  playGameUI("rock");
});

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function (e) {
  playGameUI("paper");
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function (e) {
  playGameUI("scissors");
});
