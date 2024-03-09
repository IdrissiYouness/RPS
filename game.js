let playerScore = 0;
let computerScore = 0;

let maxrounds = 5;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) {
        return 'player';
    }
    
    return 'computer';

}
 
function playGame() {

        const playerChoice = prompt("Enter rock, paper, or scissors: ");
        const winner = playRound(playerChoice);

        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }


        console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);

    
    if (playerScore > computerScore) {
        alert("Player wins the game!");
        document.getElementById("result").textContent = "Player wins the game!";
        
    } else if (computerScore > playerScore) {
        document.getElementById("result").textContent = "Computer wins the game!";
        alert("Computer wins the game!");
    } else {
        document.getElementById("result").textContent = "The game is a tie!";
        alert("The game is a tie!");
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = computerScore;


}

function playRound(playerChoice) {

    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        computerScore++;
        playerScore++;
    }


    maxrounds--;

    if (maxrounds === 0) {
        if (playerScore > computerScore) {
            document.getElementById("result").textContent = "Player wins the game!";
        } else if (computerScore > playerScore) {
            document.getElementById("result").textContent = "Computer wins the game!";
        } else {
            document.getElementById("result").textContent = "The game is a tie!";
        }

      
        document.getElementById("retry-btn").style.visibility= "visible";
        
    
        
    }
}




function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = computerScore;
}

document.getElementById("rock-btn").addEventListener("click", function() {
    playRound("rock");
    updateScore();
    desplayChoises();
});

document.getElementById("paper-btn").addEventListener("click", function() {
    playRound("paper");
    updateScore();
    desplayChoises();

});

document.getElementById("scissors-btn").addEventListener("click", function() {
    playRound("scissors");
    updateScore();
    desplayChoises();

});


function startNewGame(){
    playerScore = 0;
    computerScore = 0;
    maxrounds = 5;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("cpu-score").textContent = computerScore;
    document.getElementById("result").textContent = "";
    document.getElementById("retry-btn").style.visibility= "hidden";

}



document.getElementById("retry-btn").addEventListener("click", startNewGame);





