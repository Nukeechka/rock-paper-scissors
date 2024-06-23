function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  function getHumanChoice() {
    let humanChoice = prompt("Choice a rock, paper or scissors?");
    return capitalize(humanChoice);
  }

  function capitalize(str) {
    return str.slice(0, 1) + str.slice(1, str.length);
  }

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice + " " + computerChoice);
    if (humanChoice == computerChoice) {
      console.log("Draw!");
      return;
    }
    if (humanChoice == "Rock" && computerChoice == "Paper") {
      console.log("You lose! Paper beats Rock");
      return computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
      console.log("You lose! Scissors beats Paper");
      return computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
      console.log("You lose! Rock beats Scissors");
      return computerScore++;
    }
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return humanScore++;
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore == computerScore) {
    console.log("Draw! Good game!");
  } else if (humanScore > computerScore) {
    console.log("You win game!");
  } else {
    console.log("You lose game!");
  }
}

playGame();
