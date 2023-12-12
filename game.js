const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function promptUser(event){
    let target = event.target;
    let playerSelection = '';
    switch(target.id){
        case 'rock-btn':
            playerSelection = 'Rock';
            break;
        case 'paper-btn':
            playerSelection = 'Paper';
            break;
        case 'scissors-btn':
            playerSelection = 'Scissors';
            break;
    }
    return singleRound(playerSelection, getComputerChoice());
}

function singleRound(playerSelection, computerSelection){

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock'){
        output.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    }
    else if (playerSelection === computerSelection){
        output.textContent = 'It is a tie, try again!';
        return 2;
    }
    else{
        output.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return 3;
    }

}

function playRounds(){
    let playerScore = 0;
    let computerScore = 0;
    const NUM_OF_ROUNDS = 5;
    let currentRound = 1;

    let playerSelection;

    options.addEventListener('click', function selector (event) {
        playerSelection = promptUser(event);

        if (playerSelection === 1){
            playerScore++;
            currentRound++;
            playerScoreElement.textContent = `Player Score: ` + playerScore;
        }
        if(playerSelection === 3){
            computerScore++;
            currentRound++;
            computerScoreElement.textContent = `Computer Score: ` + computerScore;

        }

        if(currentRound > NUM_OF_ROUNDS){
            (playerScore > computerScore) ? output.textContent = `GAME OVER! You won! With a score of ${playerScore}` : output.textContent = `GAME OVER! You lose! Computer had score of ${computerScore}`;
            options.removeEventListener('click', selector);
        }

    });

}


let options = document.querySelector('#options');
let playerScoreElement = document.createElement('div');
let computerScoreElement = document.createElement('div');
playerScoreElement.textContent = `Player Score: ` + 0;
computerScoreElement.textContent = `Computer Score: ` + 0;
score.appendChild(playerScoreElement);
score.appendChild(computerScoreElement);
const output = document.createElement('div');
options.appendChild(output);


playRounds();







