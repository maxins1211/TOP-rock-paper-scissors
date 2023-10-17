function getComputerChoice() {
    let random = Math.floor(Math.random()*3) + 1;
    if (random === 1) {return "ROCK";}
    else if (random === 2) {return "PAPER";}
    else return "SCISSORS";
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === "ROCK" && computerSelection ==="PAPER"
        || playerSelection === "PAPER" && computerSelection === "SCISSORS"
        || playerSelection === "SCISSORS" && computerSelection ==="ROCK" ) 
             {  
                return 1;
             } 
    else if ( computerSelection ==="ROCK" && playerSelection === "PAPER"
        || computerSelection ==="PAPER"  && playerSelection === "SCISSORS"
        || computerSelection === "SCISSORS" && playerSelection === "ROCK" )
             {
                return 2;
             }
        else return 0;
    }

function game() {
    let computerWinCount = 0, playerWinCount = 0;
    for (let i = 0; i < 5; i ++){
        let playerSelection = prompt("Rock, Paper, Scissors! Choose wisely").toUpperCase(),
            computerSelection = getComputerChoice();
        if (playRound(playerSelection,computerSelection) === 1) {
            computerWinCount++;
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
        } else if (playRound(playerSelection,computerSelection) === 2) {
            playerWinCount++;
            console.log(`You win this round! ${playerSelection} beats ${computerSelection} `);
        }else console.log("Draw");
    }
    let score = "Player     " + playerWinCount + " - " + computerWinCount + "      Computer";
    console.log("Final Score: ",score);
     ( playerWinCount > computerWinCount ) ? console.log("Player win!") :
         (playerWinCount < computerWinCount) ? console.log("Computer win!") : console.log("This is a tier!");
   
}
    game();