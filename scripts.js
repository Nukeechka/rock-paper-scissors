let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const btnWrapper = document.querySelector(".btn-wrapper");
const humanScoreText = document.querySelector("#human");
const computerScoreText = document.querySelector("#computer");
const messagesText = document.querySelector(".messages");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    messagesText.textContent = "Draw!";
    return;
  }
  if (humanChoice == "Rock" && computerChoice == "Paper") {
    messagesText.textContent = "You lose! Paper beats Rock";
    return computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    messagesText.textContent = "You lose! Scissors beats Paper";
    return computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    messagesText.textContent = "You lose! Rock beats Scissors";
    return computerScore++;
  }
  messagesText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  return humanScore++;
}

let playGame = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const humanSelection = e.target.value;
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      if (humanScore == 5) {
        endGame(true);
      } else if (computerScore == 5) {
        endGame(false);
      }
      humanScoreText.textContent = humanScore.toString();
      computerScoreText.textContent = computerScore.toString();
    });
  });
};

let endGame = (isWinner) => {
  if (isWinner) {
    messagesText.textContent = "You win game!";
  } else {
    messagesText.textContent = "You lose game!";
  }
  buttons.forEach((button) => {
    button.parentNode.removeChild(button);
  });

  const restartButton = document.createElement("button");
  restartButton.classList.add("btn");
  restartButton.textContent = "Play again";
  btnWrapper.appendChild(restartButton);
  restartButton.addEventListener("click", () => {
    location.reload();
  });
};

document.addEventListener("load", playGame());
