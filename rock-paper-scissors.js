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
const playerChoice = prompt("Please choose one: Rock, Paper, Scissors").toLowerCase();
//saved the return value for the computer choice in a variable to be used when calling oneRound function
const computerChoice = function getComputerChoice(){
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
//variables to save user wins and computer wins
let userWins;
let computerWins; 



//function to get the computer input randomly


//function to get play a round of the game

function oneRound(playerSelection, computerPlay){

    let computerSelection = computerPlay();

    if(playerSelection === 'rock' && computerSelection === 'rock'){
        console.log(`Computer Choice: ${computerSelection}`)
        return "Draw!";
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(`Computer Choice: ${computerSelection}`)
        computerWins += 1;
        return "You Lose! Paper beats Rock";
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`Computer Choice: ${computerSelection}`)
        userWins +=1;
        return "You Win! Rock beats Scissors";
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`Computer Choice: ${computerSelection}`)
        userWins +=1;
        return "You Win! Paper beats Rock";
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        console.log(`Computer Choice: ${computerSelection}`)
        return "Draw!";
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log(`Computer Choice: ${computerSelection}`)
        computerWins += 1;
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log(`Computer Choice: ${computerSelection}`)
        computerWins += 1;
        return "You Lose! Rock beats scissors";
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`Computer Choice: ${computerSelection}`)
        userWins +=1;
        return "You Win! Scissors beats Paper";
    }else{
        return "Draw!";
    }
}
//create function game to play 5 rounds
function game(){
    for (let i = 0; i < 5; i++) {
        oneRound(playerChoice, computerChoice);
    }

    if (userWins === computerWins){
        console.log("Draw!")

    }else if(userWins > computerWins){
        console.log("You Win!")
    
    }else{
        console.log("Computer Wins!")
    }
}