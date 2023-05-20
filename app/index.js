import * as document from "document";
import * as fs from "fs";

const FILE_PATH = "state.json";
const FILE_OPTION = "json";

const meButton = document.getElementById("me-button");
const opButton = document.getElementById("op-button");
const resetButton = document.getElementById("reset-button");

const incrementScore = (scoreLabel) => {
  const currentScore = parseInt(scoreLabel.text);
  scoreLabel.text = currentScore + 1;

  saveState();
}

const resetScores = () => {
  meButton.text = "0";
  opButton.text = "0";

  saveState();
}

const readState = () => {

  if (!fs.existsSync(FILE_PATH)) {
    return;
  }

  const state = fs.readFileSync(FILE_PATH, FILE_OPTION);

  meButton.text = state.me;
  opButton.text = state.op;
}

const saveState = () => {
  const state = {
    "me": meButton.text,
    "op": opButton.text
  };
  fs.writeFileSync(FILE_PATH, state, FILE_OPTION);
}

meButton.addEventListener("click", () => incrementScore(meButton));
opButton.addEventListener("click", () => incrementScore(opButton));
resetButton.addEventListener("click", () => resetScores());

readState();
