const options = ['rock', 'paper', 'scissors'];

// Computer's choice of weapon 
function getComputerChoice(){

    let choice = options[Math.floor(Math.random() * 3)];

    return choice;
}

// checking if playerSelection is a valid choice
function getPlayerChoice(){
    let isValidChoice = false;
        
    while(isValidChoice == false){
        const choice = prompt("Choose your weapon");

        if(choice == null){
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            isValidChoice = true;
            return choiceInLower;
        }
    }
}


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


// Five round game
function game(){

    //Initialize scores for both player and computer
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let result = singleRound(playerSelection, computerSelection)
        
        if(result == `You win! ${playerSelection} beats ${computerSelection}`){
            playerScore++;
        }
        else if(result == `You lose! ${computerSelection} beats ${playerSelection}`){
            computerScore++;
        }
        
        console.log(result);
    }
    
    // Win or lose message
    if(playerScore > computerScore){
        console.log(`You win the game. Player: ${playerScore}; Computer: ${computerScore}`);
    }
    else{
        console.log(`You lose the game. Player: ${playerScore}; Computer: ${computerScore}`);
    }

    return 'Game Over'
}

function pressButton(){
    console.log(game())
}