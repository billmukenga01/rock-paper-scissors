
/*
--------------------------LOGIC-----------------------------
randomly generate the computers choice out of a selection of rock, paper or scissors
ask the user for input
compare the two and see who wins the round
continue this process of playing the round and the best of 5 wins the game*/


/*create a variable userWins
create a variable computerWins
on of the two will increment if the user or the computer wins the round and the one
with the most at the end  of 5 games wins
*/




//variables to save user wins and computer wins

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const body = document.querySelector('body');
const newDiv = document.createElement('div');
const newDiv2 = document.createElement('div');

let userWins = 0;
let computerWins = 0; 

//function expression to prompt the user for input
let playerChoice = function(){
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

    /*these variables have to be in the oneround function so as to prevent 
    one value being used in the entire loop over and over*/
    const playerSelection = playerPlay;
    const computerSelection = computerPlay();

    //check the first to 5 points

    if (userWins === 5 || computerWins === 5){

        // check who wins the 5 rounds
        if (userWins === computerWins){
            console.log("Draw Game!")
    
            //reset values for next function call
            userWins = 0;
            computerWins = 0;
    
        }else if(userWins > computerWins){
            console.log("You Win Game!")
    
            //reset value for next function call
            userWins = 0;
            computerWins = 0;
        
        }else{
            console.log("Computer Wins Game!")
    
            //reset value for next function call
            userWins = 0;
            computerWins = 0;
        }
    }else if(userWins > 5 || computerWins > 5){
        //reset value for next function call

        userWins = 0;
        computerWins = 0;
    }

    //check to see who wins round and increment either userWins or computerWins and return a string value
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        newDiv.textContent =  "Draw!";
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        computerWins += 1;
        newDiv.textContent =  "You Lose! Paper beats Rock";
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        userWins +=1;
        newDiv.textContent =  "You Win! Rock beats Scissors";
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        userWins +=1;
        newDiv.textContent =  "You Win! Paper beats Rock";
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        newDiv.textContent =  "Draw!";
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        computerWins += 1;
        newDiv.textContent =  "You Lose! Scissors beats Paper";
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        computerWins += 1;
        newDiv.textContent =  "You Lose! Rock beats scissors";
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        userWins +=1;
        newDiv.textContent =  "You Win! Scissors beats Paper";
    }else{
        newDiv2.textContent = `Computer Choice: ${computerSelection}`
        newDiv.textContent =  "Draw!";
    }

}





// create function game to play 5 rounds

// function game(){
//     for (let i = 0; i < 5; i++) {
//         const result = oneRound(playerChoice, computerChoice);
//         console.log(result);
//     }

//     //check who wins the 5 rounds
//     if (userWins === computerWins){
//         console.log("Draw Game!")

//         //reset values for next function call
//         userWins = 0;
//         computerWins = 0;

//     }else if(userWins > computerWins){
//         console.log("You Win Game!")

//         //reset value for next function call
//         userWins = 0;
//         computerWins = 0;
    
//     }else{
//         console.log("Computer Wins Game!")

//         //reset value for next function call
//         userWins = 0;
//         computerWins = 0;
//     }
// }


// code to get input from 3 buttons on the ui

rock.addEventListener('click', e =>{
    playerChoice = 'rock';
    oneRound(playerChoice, computerChoice);
});
paper.addEventListener('click', e =>{
    playerChoice = 'paper';
    oneRound(playerChoice, computerChoice);
});
scissors.addEventListener('click', e =>{
    playerChoice = 'scissors';
    oneRound(playerChoice, computerChoice);
});

//change the text content of rock paper scissors
rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

body.appendChild(newDiv2);
body.appendChild(newDiv);

// game();