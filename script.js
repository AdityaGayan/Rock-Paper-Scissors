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

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const result = document.querySelector(".result");
    const score = document.querySelector(".score");
    const display = document.querySelector(".display");

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === computerChoice){
            display.textContent = "Round Tied!";
            score.textContent = `Human score: ${humanScore}\tComputer score: ${computerScore}`;
        }
        else{
            if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
                display.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
                score.textContent = `Human score: ${humanScore}\tComputer score: ${computerScore}`;
                if(computerScore >= 5){
                    result.textContent = `YOU LOSE`;
                    rock.disabled = true;
                    paper.disabled = true;
                    scissors.disabled = true;
                }
            }
            else{
                display.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
                score.textContent = `Human score: ${humanScore}\tComputer score: ${computerScore}`;
                if(humanScore >= 5){
                    result.textContent = `YOU WIN`;
                    rock.disabled = true;
                    paper.disabled = true;
                    scissors.disabled = true;
                }
            }
        }
    }
    

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        
    })
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        
    })
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    })
