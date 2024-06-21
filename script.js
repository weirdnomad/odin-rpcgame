const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = "0";
let computerScore = "0";
playerScoreDisplay.textContent = "0";
computerScoreDisplay.textContent = "0";

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";

  if (computerChoice === playerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }

  switch (result) {
    case "YOU WIN":
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

  if (playerScore == 5 || computerScore == 5) {
    result = "GAME IS DONE!";
    playerScore = 0;
    computerScore = 0;
  }
  resultDisplay.textContent = result;
}
