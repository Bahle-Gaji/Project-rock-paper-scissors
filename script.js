// Computer's choice of weapon 
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){

    let choice = options[Math.floor(Math.random() * 3)];

    return choice;
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



