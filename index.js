function getComputerChoice() {
  const compChoice = ['rock','paper','scissors']
  const randomChoice = Math.floor(Math.random()*compChoice.length)
  return compChoice[randomChoice];
}


function playGame(playerSelection,computerSelection){
     
  
  if (playerSelection=="rock"&&computerSelection=="paper") {
       console.log("You lose! Paper beats Rock")
       return "computer";
  } else if(playerSelection=="paper"&&computerSelection=="rock") {
    console.log("You win! Paper beats rock");
    return "player"
  }
   else if(playerSelection=="scissors"&&computerSelection=="rock") {
    console.log("You lose! rock beats scissors");
    return "computer";
  }
   else if(playerSelection=="rock"&&computerSelection=="scissors") {
    console.log("You win! rock beats scissors");
    return "player"
  }
   else if(playerSelection=="paper"&&computerSelection=="scissors") {
    console.log("You lose! scissors beats paper");
    return "computer";
  }
   else if(playerSelection=="scissors"&&computerSelection=="paper") {
    console.log("You Win! Scissors beats Paper");
    return "player"
  }else if(playerSelection==computerSelection){
    console.log("It's a tie");
    return "Tie";
  }else{
    console.log("Check your spellings");
  }
  
}

function game() {
  
let computerScore=0;
let playerScore=0;
  for(let i=0; i<5;i++){
    computerSelection=getComputerChoice()
  playerSelection=prompt("What's your selection between rock,paper or scissors?")
    let result = playGame(playerSelection,computerSelection)
    if (result=="player") {
      playerScore++;
      
    } else if(result=="computer"){
      computerScore++
    }
    console.log(`Player:${playerScore} - Computer:${computerScore}`);
  }
  if (playerScore>computerScore){
    console.log("You win this game");
  } else if (computerScore>playerScore){
    console.log("Computer win this game");
  } else{
    console.log("It's a tie game");
  }
}


game()