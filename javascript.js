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

    if(playerSelection == computerSelection) //if a tie occurs
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
    return 3;//if incorrect input occurs
}

    let playerScore = 0;
    let computerScore = 0;
    let buttons = document.querySelector('#buttons');
    let playerSelection = "";
    let round = document.querySelector('#round')
    round.textContent = "I work";
    let roundCount = 0;
    let playerResult = document.querySelector('#playerResult');
    let computerResult = document.querySelector('#computerResult');
    let roundResult = document.querySelector('#roundResult');
    let endResult = document.createElement("h2");

        
        

        buttons.addEventListener('click', (event) => {
            roundCount ++;
            round.textContent = `round: **${roundCount}**`;
            
            let target = event.target;
            switch(target.id){
                case 'rock':
                    playerSelection = 'rock';
                    break;
                case 'paper':
                    playerSelection = 'paper';
                    break;
                case 'scissors':
                    playerSelection = 'scissors';
                    break;
            }
        

            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection,computerSelection);

            if(result==1 ){
                roundResult.textContent = `player win the round, ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            }else if(result == 0){
                roundResult.textContent = `computer win the round, ${computerSelection} beats ${playerSelection}`;
                computerScore++;
            }else if( result == 2){
                roundResult.textContent = "its a tie";
            }
            playerResult.textContent = 'player Score: ' + playerScore;
            computerResult.textContent = 'computer Score: ' + computerScore;
            if(playerScore >= 5 || computerScore >= 5){
                if(playerScore == computerScore){
                    endResult.textContent = "ITS a TIE! NO Winners";
                }else if(playerScore < computerScore){
                    endResult.textContent = "Computer Wins the game!";
                }else{
                    endResult.textContent = "Player Wins the game";
                }

                roundResult.appendChild(endResult);

            roundCount = 0;
            computerScore = 0;
            playerScore = 0;
            playerResult.textContent = 'player Score: ' + 0;
            computerResult.textContent = 'computer Score: ' + 0;
            round.textContent = '0';
            roundResult.text = "Begin Round";
            }
    })




