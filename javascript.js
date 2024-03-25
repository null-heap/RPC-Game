console.log(getComputerChoice());


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
        return 2;
    }
    if(playerSelection == "rock" & computerSelection == "paper"){
        return 0;
    }
    if(playerSelection == "rock" & computerSelection == "scissors"){
        return 1;
    }
    if(playerSelection == "paper" & computerSelection == "rock"){
        return 1;
    }
    if(playerSelection == "paper" & computerSelection == "scissors"){
        return 0;
    }
    if(playerSelection == "scissors" & computerSelection == "rock"){
        return 0;
    }
    if(playerSelection == "scissors" & computerSelection == "paper"){
        return 1;
    }
    return 3;
}

function playGame(rounds){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i< rounds;i++){
        console.log(`round - **${i + 1}**`)
        let playerSelection = prompt("chose your firearm");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);

        if(result==1 ){
         console.log(`player wins, ${playerSelection} beats ${computerSelection}`)
         playerScore++;
        }else if(result == 0){
            console.log(`computer wins!!!, ${computerSelection} beats ${playerSelection}`)
            computerScore++;
        }else if( result== 2){
            console.log("its a tie")
        }else{
            console.log("**incorrect input by user**")
        }
    }
    console.log(`player Score =${playerScore}, computer Score =${computerScore}`)

    if(playerScore == computerScore){
    console.log("ITS a TIE! NO Winners") 
    }else if(playerScore < computerScore){
        console.log("Computer Winns!") 
    }else{
        console.log("Player Wins.")
    }
}
playGame(5);