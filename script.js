const gameResult = document.getElementById("gameResult");
const userInput = document.getElementById("userInput");
const checkBtn = document.querySelector(".check-guess");
const randNumEl = document.getElementById("randomNum");
const playAgainBtn = document.getElementById("playAgain");

function displayMessage(message, color) {
  gameResult.textContent = message;
  gameResult.style.backgroundColor = color;
}

let playing, randomNum;

function playAgain() {
  playing = true;
  randomNum = Math.ceil(Math.random() * 20);
  randNumEl.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
  userInput.value = "";
  userInput.classList.remove("hidden");
  checkBtn.classList.remove("hidden");
  displayMessage("", "transparent");
}
playAgain();

function checkGuess() {
  let guessNum = parseInt(userInput.value);
  if (playing) {
    if (guessNum < 1 || guessNum > 20 || !guessNum) {
      displayMessage("Invalid input, choose 1 - 20", "red");
    } else if (guessNum < randomNum) {
      displayMessage("Too low ⬇️, try again..", "#00008B");
    } else if (guessNum > randomNum) {
      displayMessage("Too high ⬆️, try again..", "#00008B");
    } else if (guessNum === randomNum) {
      displayMessage("Congratulations 🥳, you got it right", "green");
      randNumEl.textContent = randomNum;
      randNumEl.classList.remove("hidden");
      userInput.classList.add("hidden");
      checkBtn.classList.add("hidden");
      playAgainBtn.classList.remove("hidden");
      playing = false;
    }
  }
}
