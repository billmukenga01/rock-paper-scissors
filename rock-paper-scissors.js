//randomly generate the computers choice out of a selection of rock, paper or scissors
//ask the user for input
//compare the two and see who wins the round
//continue this process of playing the round and the best of 5 wins the game


//create a variable userWins
//create a variable computerWins
/*on of the two will increment if the user or the computer wins the round and the fisrt one to
reach 3 wins the game
*/


// if userWins is equal to 3 exit game and console.log winner
// else if computerWins is equal to 3 exit game and console.log winner
//else continue playing

//prompt the user for input
const playerChoice = prompt("Please choose one: Rock, Paper, Scissors").toLowerCase;
//saved the return value for the computer choice in a variable to be used when calling oneRound function
const computerChoice = getComputerChoice();
//function to get the computer input randomly

function getComputerChoice(){
   //use a math.floor and math.random function to genetate a number in the range of 1 and 3
   let randomNumber = Math.floor(Math.random()*3 ) + 1;
    //use a conditional to map each number to a specific string 
   if (randomNumber === 1){
        return 'rock'; 
   }else if(randomNumber === 2){
        return 'paper';
   }else{
        return 'scissors';
   }
}

//function to get play a round of the game

function oneRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return "Draw!";
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You Win! Rock beats Scissors";
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return "You Win! Paper beats Rock";
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return "Draw!";
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You Lose! Rock beats scissors";
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return "You Win! Scissors beats Paper";
    }else{
        return "Draw!";
    }
}

oneRound(playerChoice, computerChoice);