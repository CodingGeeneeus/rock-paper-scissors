const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#result')
const choicebtns = document.querySelectorAll('.choicebtns');
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')

let player;
let computer;
var playerWin = 0
var computerWin = 0



choicebtns.forEach(button => button.addEventListener('click' , () => {
    
    //clears computer and result text before timeout display
    resultText.textContent = `Result: `
    computerText.textContent =  `Computer: `;
    //gets player input and runs getComputerChoice and checkWinner function
    player = button.textContent;
    computer = getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    //gives some suspense..
    setTimeout(() => {
        computerText.textContent =  `Computer: ${computer}`;
        resultText.textContent = `Result: ${checkWinner()}`
    }, 200)
    
    
}));








function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3)+1

    switch(randNum) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}


function checkWinner() {

 if (player == computer) {
    return "Draw!"
  } else if (player == 'Rock' && computer == 'Paper') {
        computerWin++
        return "You Lose!"
    } else if (player == 'Rock' && computer == 'Scissors') {
        playerWin++
        return "You Win!"
  } else if (player == 'Paper' && computer == 'Scissors') {
      computerWin++
      return "You Lose!"
  } else if (player == 'Paper' && computer == 'Rock') {
    playerWin++
      return "You Win!"
  } else if (player == 'Scissors' && computer == 'Rock') {
    computerWin++
      return "You Lose"
  }else if (player == 'Scissors' && computer == 'Paper') {
    playerWin++
    return "You Win!"
  }

  }