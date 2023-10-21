const playerSelections = document.querySelector("ul.flex");
const scoreBoard = document.querySelector(".score-board");
const roundResult = document.createElement("p");
const finalResult = document.createElement("h2");
const score = document.createElement("p");
const endScreen = document.querySelector(".end-screen");
const endText = document.createElement("p");
const playAgain = document.querySelector(".play-again");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const computerChoice = document.querySelector(".computer-choice");
const playAgainText = document.querySelector(".play-again-text");
const overlay = document.querySelector(".overlay");
let computerWinCount = 0,
  playerWinCount = 0;
scoreBoard.appendChild(roundResult);
playerSelections.addEventListener("click", (event) => {
  let target = event.target;
  removeAllClass(rock);
  removeAllClass(paper);
  removeAllClass(scissors);
  removeAllClass(computerChoice);
  switch (target.id) {
    case "rock":
      roundResult.textContent = game("rock");
      addClass(rock);
      break;
    case "paper":
      roundResult.textContent = game("paper");
      addClass(paper);
      break;
    case "scissors":
      roundResult.textContent = game("scissors");
      addClass(scissors);
      break;
  }
  score.textContent =
    "Player     " +
    playerWinCount +
    " - " +
    computerWinCount +
    "      Computer";
  scoreBoard.appendChild(score);
  if (playerWinCount === 5) {
    endScreen.style.display = "flex";
    endText.textContent = "You win! Want to play again ?";
    endScreen.insertBefore(endText, playAgain);
    overlay.classList.add("active");
  }
  if (computerWinCount === 5) {
    endScreen.style.display = "flex";
    endText.textContent = "You lose! Want to play again ?";
    endScreen.insertBefore(endText, playAgain);
    overlay.classList.add("active");
  }
});
const replay = function () {
  computerWinCount = 0;
  playerWinCount = 0;
  endScreen.style.display = "none";
  roundResult.textContent = "";
  score.textContent = "";
  removeAllClass(rock);
  removeAllClass(paper);
  removeAllClass(scissors);
  removeAllClass(computerChoice);
  overlay.classList.remove("active");
  computerChoice.style.background =
    "url(images/noun-question-mark-447554.png) center";
  computerChoice.style.backgroundSize = "45px 45px";
  computerChoice.style.backgroundRepeat = "no-repeat";
};
playAgain.addEventListener("click", replay);
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 1) {
    computerChoice.style.background = "url(images/noun-fist-477918.png) center";
    computerChoice.style.backgroundSize = "70px 70px";
    return "rock";
  } else if (random === 2) {
    computerChoice.style.background = "url(images/noun-hand-477922.png) center";
    computerChoice.style.backgroundSize = "70px 70px";
    return "paper";
  } else {
    computerChoice.style.background = "url(images/noun-scissors-477919.png)";
    computerChoice.style.backgroundSize = "70px 70px";
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return 1; //Computer win
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    return 2; //Player win
  } else return 0; //Draw
}

function game(playerSelection, computerSelection = getComputerChoice()) {
  if (playRound(playerSelection, computerSelection) === 1) {
    computerWinCount++;
    return "You lose this round!";
  } else if (playRound(playerSelection, computerSelection) === 2) {
    playerWinCount++;
    return "You win this round";
  } else return "Draw";
}

function addClass(itemID) {
  if (roundResult.textContent === "You win this round") {
    itemID.classList.add("win");
    computerChoice.classList.add("lose");
  }
  if (roundResult.textContent === "You lose this round!") {
    itemID.classList.add("lose");
    computerChoice.classList.add("win");
  }
  if (roundResult.textContent === "Draw") {
    itemID.classList.add("draw");
    computerChoice.classList.add("draw");
  }
}

function removeAllClass(itemID) {
  itemID.classList.remove("win");
  itemID.classList.remove("lose");
  itemID.classList.remove("draw");
}
