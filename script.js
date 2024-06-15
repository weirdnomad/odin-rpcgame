/*  
    ASK playerName and STORE it in playerName
    ASK to choose rock paper or scissors and STORE it playerChoice
    SET a random number and STORE it in computerChoice
    SET 2 variable for points
    COMPARE the 2 choices to know who win
    ADD point to the winner
    LOOP the game 5 time
    DECLARE the winner
*/
let playerPoint = 0;
let computerPoint = 0;

let playerName = prompt("What's your name pal ?");
if (playerName == null) {
  alert("It's sad you don't want to play...");
}
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
alert("All right " + playerName + ", let's play then.");

for (let i = 0; i < 5; i++) {
  let playerChoice = prompt("Rock, Paper or Scissors ?");
  let playerResult = playerChoice.toLowerCase();
  let playerDisplay =
    playerResult.charAt(0).toUpperCase() + playerResult.slice(1);

  if (
    playerDisplay !== "Rock" &&
    playerDisplay !== "Paper" &&
    playerDisplay !== "Scissors"
  ) {
    alert("This is not a valid choice " + playerName + ".");
  }

  if (playerDisplay === "Rock") {
    playerResult = 0;
  } else if (playerDisplay === "Paper") {
    playerResult = 1;
  } else {
    playerResult = 2;
  }

  let computerChoice = Math.floor(Math.random() * 3);
  let computerDisplay;

  if (computerChoice === 0) {
    computerDisplay = "Rock";
  } else if (computerChoice === 1) {
    computerDisplay = "Paper";
  } else {
    computerDisplay = "Scissors";
  }

  alert(
    "You choose " +
      playerDisplay +
      ", and the computer choose " +
      computerDisplay +
      "."
  );

  if (parseInt(playerResult) === parseInt(computerChoice)) {
    alert("It's a tie !");
    i = --i;
  } else if (
    (playerDisplay == "Rock" && computerDisplay == "Scissors") ||
    (playerDisplay == "Scissors" && computerDisplay == "Paper") ||
    (playerDisplay == "Paper" && computerDisplay == "Rock")
  ) {
    alert("You win this !");
    playerPoint = ++playerPoint;
  } else {
    alert("You lose...");
    computerPoint = ++computerPoint;
  }

  alert(
    "Scores :" +
      "\n" +
      "You : " +
      playerPoint +
      "         Computer : " +
      computerPoint
  );

  if (i == 5) {
    alert(
      "The game is over. Final scores :" +
        "\n" +
        "You : " +
        playerPoint +
        "         Computer : " +
        computerPoint
    );
  }
}
