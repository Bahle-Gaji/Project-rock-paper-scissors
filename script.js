// Computer's choice of weapon 

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];

    let choice = options[Math.floor(Math.random() * 3)]

    return choice;
}

getComputerChoice();

function singleRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){

        return `It's a tie! Both chose ${playerSelection}`;
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ){

        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{

        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(singleRound(playerSelection, computerSelection));

