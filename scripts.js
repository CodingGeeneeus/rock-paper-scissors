
let randNum = Math.floor(Math.random()*3)+1

function getComputerChoice() {
    switch(randNum) {
        case 1:
            return 'ROCK'   
        case 2:
            return 'PAPER'
        case 3:
            return 'SCISSORS';
}
}

function playRound(challenger,computerChoice){
    if(computerChoice == challenger) {
        return "It's a draw!";
    } else if(challenger == 'ROCK' && computerChoice == 'PAPER') {
        return `You lose!, ${computerChoice} beats ${playerSelection}`;

    } else if(challenger == 'ROCK' && computerChoice == 'SCISSORS') {
        return `You win! ${playerSelection} beats ${computerChoice}` ;

    } else if(challenger == 'PAPER' && computerChoice == 'SCISSORS') {
        return `You lose!, ${computerChoice} beats ${playerSelection}`;

    } else if(challenger == 'PAPER' && computerChoice == 'ROCK') {
        return `You win! ${playerSelection} beats ${computerChoice}` ;

    } else if(challenger == 'SCISSORS' && computerChoice == 'ROCK') {
        return `You lose!, ${computerChoice} beats ${playerSelection}`;

    } else if(challenger == 'SCISSORS' && computerChoice == 'PAPER') {
        return `You win! ${playerSelection} beats ${computerChoice}`;

    }
} 



let playerSelection = prompt('What is your selection?' )
let challenger = playerSelection.toUpperCase();

let computerChoice = getComputerChoice();


