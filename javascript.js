console.log(getComputerChoice());
var playerScore = 0;
var computerScore = 0;

function getComputerChoice()
{
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log("playerSelection = " + playerSelection)
    console.log("computerSelection = " + computerSelection)

    if(playerSelection == computerSelection)
    {
        return "its a tie"
    }
    if(playerSelection == "rock" & computerSelection == "paper"){
        computerScore++;
        return "You Lose! Paper beats Rock"
    }
    if(playerSelection == "rock" & computerSelection == "scissors"){
        score++;
        return "You Win! Rock beats Scissors"
    }
    if(playerSelection == "paper" & computerSelection == "rock"){
        score++;
        return "You Win! Paper beats Rock"
    }
    if(playerSelection == "paper" & computerSelection == "scissors"){
        computerScore++;
        return "You Lose! Scissors beats Paper"
    }
    if(playerSelection == "scissors" & computerSelection == "rock"){
        computerScore++;
        return "You Lose! Rock beats Scissors"
    }
    if(playerSelection == "scissors" & computerSelection == "paper"){
        score++;
        return "You Win! Scissors beats Paper"
    }
    return "incorrect input"
}

function playGame(){
    for(let i=0; i< 5;i++){
    let playerSelection = prompt("chose your firearm");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    }
    console.log(`player Score =${playerScore}, computer Score =${computerScore}`)

    if(playerScore == computerScore){
        return "ITS a TIE! NO Winners";
    }else if(playerScore < computerScore){
        return "Computer Winns!"
    }else{
        return "Player Wins."
    }
}
playGame();