const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

const capitilise = string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function promptUser(){
    let playerSelection = prompt('Rock, Paper or Scissors?');
    return singleRound(playerSelection, getComputerChoice());
}

const singleRound = (playerSelection, computerSelection) => {

    playerSelection = capitilise(playerSelection);

    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (playerSelection === computerSelection){
        console.log('It is a tie!');
        return promptUser(); //Recursion, prompts user again if a tie
    }
    else{
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }

}

function playRound(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=1; i<=5; i++){
        promptUser() ? playerScore++ : computerScore++;
    }
    (playerScore > computerScore) ? console.log(`You won! With a score of ${playerScore}`) : console.log(`You lose! Computer had score of ${computerScore}`);
}

playRound();