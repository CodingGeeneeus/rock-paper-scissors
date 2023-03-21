const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#result')
const choicebtns = document.querySelectorAll('.choicebtns');
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const refreshButton = document.querySelector('#refreshButton')



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
    //gives some suspense
    setTimeout(() => {
        computerText.textContent =  `Computer: ${computer}`;
        resultText.textContent = `Result: ${checkWinner()}`
    }, 200)
    
    playerScore.textContent = `Player: ${playerWin}`
    computerScore.textContent = `Computer: ${computerWin}`
}));

//random computer choice function
function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3)+1

    switch(randNum) {
        case 1:
            return '👊';
        case 2:
            return '✋';
        case 3:
            return '✌';
    }
}

//checks inputs from player and getComputerChoice function
function checkWinner() {

 if (player == computer) {
      return "Draw!"
    } else if (player == '👊' && computer == '✋') {
        computerWin++
        return "You Lose!"
    } else if (player == '👊' && computer == '✌') {
        playerWin++
        return "You Win!"
    } else if (player == '✋' && computer == '✌') {
        computerWin++
        return "You Lose!"
    } else if (player == '✋' && computer == '👊') {
        playerWin++
        return "You Win!"
    } else if (player == '✌' && computer == '👊') {
        computerWin++
        return "You Lose!"
    }else if (player == '✌' && computer == '✋') {
      playerWin++
      return "You Win!"
    }

  };


  //refresh button 

  refreshButton.addEventListener('click', function refresh(){
    window.location.reload("Refresh")
  })

  
  

  