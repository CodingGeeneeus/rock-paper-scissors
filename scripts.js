


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
    if(computerChoice == challenger) {
        return "It's a Draw!";
    } else if(challenger == 'ROCK' && computerChoice == 'PAPER') {
        return 0;

    } else if(challenger == 'ROCK' && computerChoice == 'SCISSORS') {
        return 1 ;

    } else if(challenger == 'PAPER' && computerChoice == 'SCISSORS') {
        return 0;

    } else if(challenger == 'PAPER' && computerChoice == 'ROCK') {
        return 1 ;

    } else if(challenger == 'SCISSORS' && computerChoice == 'ROCK') {
        return 0;

    } else if(challenger == 'SCISSORS' && computerChoice == 'PAPER') {
        return 1;

    }
} 



function game() {
    let challenger = prompt('What is your selection?').toUpperCase()
    let computerChoice = getComputerChoice()
    
        if (playRound(challenger,computerChoice) == 1){
            return 'Player Wins!'
        } else if (playRound(challenger, computerChoice) == 0) {
            return 'Computer Wins!'
        
     


    }
}

function score(a,b){
    if (game() == 'Player Wins!'){
        return a++
    } else if (game() == 'Computer Wins!') {
        return b++
    }
}

console.log(game(), score(0,0))

