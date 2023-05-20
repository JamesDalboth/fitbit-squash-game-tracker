import * as document from "document";

const meButton = document.getElementById("me-button");
const opButton = document.getElementById("op-button");
const resetButton = document.getElementById("reset-button");

const incrementScore = (scoreLabel) => {
  const currentScore = parseInt(scoreLabel.text);
  scoreLabel.text = currentScore + 1;
}

const resetScores = () => {
  meButton.text = "0";
  opButton.text = "0";
}

meButton.addEventListener("click", () => incrementScore(meButton));
opButton.addEventListener("click", () => incrementScore(opButton));
resetButton.addEventListener("click", () => resetScores());

resetScores();
