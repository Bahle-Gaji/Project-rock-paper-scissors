// Computer's choice of weapon 

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];

    let choice = options[Math.floor(Math.random() * 3)]

    console.log(choice)

}

