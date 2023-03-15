


function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3)+1

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
    if(challenger.toUpperCase() == computerChoice) {
        return draw;
    } else if(challenger.toUpperCase() == 'ROCK' && computerChoice == 'PAPER') {
        computerScore++
        return lose;

    } else if(challenger.toUpperCase() == 'ROCK' && computerChoice == 'SCISSORS') {
        playerScore++;
        return win;

    } else if(challenger.toUpperCase() == 'PAPER' && computerChoice == 'SCISSORS') {
        computerScore++
        return lose;

    } else if(challenger.toUpperCase() == 'PAPER' && computerChoice == 'ROCK') {
        playerScore++
        return win;

    } else if(challenger.toUpperCase() == 'SCISSORS' && computerChoice == 'ROCK') {
        computerScore++
        return lose;

    } else if(challenger.toUpperCase() == 'SCISSORS' && computerChoice == 'PAPER') {
        playerScore++
        return win;

    }
} 

var playerScore = 0
var computerScore = 0
const win = 'You Win!'
const lose = 'You Lose!'
const draw = 'Draw!'

function game() {
    for (let i = 0; i<5; i++) {
        let challenger = prompt('What is your selection?')
        const computerChoice = getComputerChoice()
        console.log(playRound(challenger,computerChoice));
        console.log("You're score:" + playerScore)
        console.log("Computer's score:" + computerScore)
        
    }
}

game()
        
console.log(`Final Score:`)
console.log(` Player: ${playerScore} to Computer: ${computerScore}`)




