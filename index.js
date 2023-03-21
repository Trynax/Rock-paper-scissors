let computerScore = 0;
let playerScore = 0;
let turns = 0;
let showR = document.getElementById('showR')
showR.textContent=""

const maxTurns = 5;

const displayResult = document.createElement('div');
displayResult.textContent = `Player:${playerScore} - Computer:${computerScore}`;
document.body.appendChild(displayResult);
let resultR = document.getElementById("para");
resultR.innerText="Select an option"
let computerSelection;
const turnsElement = document.querySelector(".turns");

function choose(selection) {
    if (turns == maxTurns) return;
  let playerSelection = selection;
  computerSelection = getComputerChoice();
  let result = playGame(playerSelection, computerSelection);
  updateScore(result);
  checkTurns();
}

function getComputerChoice() {
  const compChoice = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * compChoice.length);
  return compChoice[randomChoice];
}

function playGame(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    resultR.innerText='You lose! Paper beats Rock'

    return 'computer';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    resultR.innerText='You win! Paper beats rock'

    return 'player';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    resultR.innerText='You lose! rock beats scissors'

    return 'computer';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    resultR.innerText='You win! rock beats scissors'

    return 'player';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    resultR.innerText='You lose! scissors beats paper'

    return 'computer';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    resultR.innerText='You Win! Scissors beats Paper'

    return 'player';
  } else if (playerSelection === computerSelection) {
    resultR.innerText="It's a tie"
    return 'tie';
  } else {
    console.log('Check your spellings');
    return 'error';
  }
}

function updateScore(winner) {
  if (winner == 'player') {
    playerScore++;
  } else if (winner == 'computer') {
    computerScore++;
  }
  displayResult.textContent = `Player:${playerScore} - Computer:${computerScore}`;
}

function checkTurns()
{
    if (turns == maxTurns) {
        return;
    }

    turns++;
    turnsElement.textContent = turns;

    if (turns==5 && playerScore > computerScore) {
      showR.textContent="You win this game";
  } else if (turns==5 && computerScore > playerScore) {
    showR.textContent="Computer wins this game";
  } else if(turns==5 && computerScore == playerScore) {
    showR.textContent="It's a tie game";
  }
}
/*
function endGame() {
    if (playerScore > computerScore) {
        console.log("You win this game");
    } else if (computerScore > playerScore) {
        console.log("Computer wins this game");
    } else {
        console.log("It's a tie game");
    }
}
*/

function reset() {
  turns=0;
  playerScore=0
  computerScore=0
  resultR.innerText='Select an option'
  displayResult.textContent = `Player:${playerScore} - Computer:${computerScore}`;
  turnsElement.textContent=turns
  showR.textContent="";
}