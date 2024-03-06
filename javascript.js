console.log(getComputerChoice());

function getComputerChoice()
{
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(){
    let playerSelection = prompt("chose your firearm");
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

}

function choseWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
    {
        return "its a tie"
    }
    if(playerSelection == "rock" & computerSelection == "paper"){
        
    }
}