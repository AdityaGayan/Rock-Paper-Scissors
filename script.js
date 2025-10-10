function getComputerChoice(){
    let random = Math.random();
    if(random < (1/3)){
        return "rock";
    }
    else if(random < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(){
    let choice =  prompt("Enter your choice");
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === computerChoice){
            console.log("Round tied!");
        }
        else{
            if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else{
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if(humanScore > computerScore){
        console.log("Congralutions! You win the game!");
    }
    else if(humanScore < computerScore){
        console.log("You lose the game! Better luck next time");
    }
    else{
        console.log("Game tied!");
    }
}

playGame();