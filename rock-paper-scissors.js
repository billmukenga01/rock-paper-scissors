/*randomly generate the computers choice out of a selection of rock, paper or scissors
ask the user for input
compare the two and see who wins the round
continue this process of playing the round and the best of 5 wins the game*/


/*create a variable userWins
create a variable computerWins
on of the two will increment if the user or the computer wins the round and the fisrt one to
reach 3 wins the game
*/


/*if userWins is equal to 3 exit game and console.log winner
else if computerWins is equal to 3 exit game and console.log winner
else continue playing*/


//variables to save user wins and computer wins
let userWins = 0;
let computerWins = 0; 

//function expression to prompt the user for input
const playerChoice = function(){
    //prompt the user for input
    return prompt("Please choose one: Rock, Paper, Scissors").toLowerCase();
}

//function expression to save the value of the function that generates the rock, paper, or scissors randomly
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

//function to get play a round of the game

function oneRound(playerPlay, computerPlay){
    //these variables have to be in the oneround function so as to prevent one value being used in the entire loop over and over
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    //check to see who wins round and increment either userWins orcomputerWins and return a string value
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
        const result = oneRound(playerChoice, computerChoice);
        console.log(result);
    }
//check who wins the 5 rounds
    if (userWins === computerWins){
        console.log("Draw!")

    }else if(userWins > computerWins){
        console.log("You Win Game!")
    
    }else{
        console.log("Computer Wins Game!")
    }
}
game();