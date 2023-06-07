const buttons = document.querySelectorAll("button");
const resultText = document.querySelector("#result");
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");
const userChoiceResult = document.querySelector("#user-choice-result");
const computerChoiceResult = document.querySelector("#computer-choice-result");
const reset = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultText.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  userChoiceResult.textContent = playerSelection;
  computerChoiceResult.textContent = computerSelection;
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    userScoreText.textContent = playerScore;
    return "User Win " + playerSelection + " beat " + computerSelection;
  } else {
    computerScore++;
    computerScoreText.textContent = computerScore;
    return "User Lose " + playerSelection + " beat " + computerSelection;
  }
}
reset.addEventListener("click", () => {
  resultText.textContent = "Result";
  userScoreText.textContent = "0";
  computerScoreText.textContent = "0";
  computerScore = 0;
  playerScore = 0;
  userChoiceResult.textContent = "User";
  computerChoiceResult.textContent = "Computer";
});
