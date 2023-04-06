
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



//new wlements to be appended

const start = document.querySelector('#start-button');
const div = document.querySelector('div');

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const reset = document.createElement('button');
const newDiv = document.createElement('div');
const newDiv2 = document.createElement('div');
const newDiv3 = document.createElement('div');
const userPoints = document.createElement('div');
const computerPoints = document.createElement('div');

//variables to save user wins and computer wins
let userWins = 0;
let computerWins = 0; 

//variable to save player choice from buttons
let playerChoice = ' ';

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';
reset.textContent = 'Reset Game';


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
};



//function to get play a round of the game

function oneRound(playerPlay, computerPlay){

    /*these variables have to be in the oneround function so as to prevent 
    one value being used in the entire loop over and over*/
    const playerSelection = playerPlay;
    const computerSelection = computerPlay();

   

    if(userWins < 5 || computerWins < 5){
        //check to see who wins round and increment either userWins or computerWins and return a string value

        if(playerSelection === 'rock' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            newDiv.textContent =  "Draw!";
        }else if(playerSelection === 'rock' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Paper beats Rock";
        }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ userWins;
            newDiv.textContent =  "You Win! Rock beats Scissors";
        }else if(playerSelection === 'paper' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ userWins;
            newDiv.textContent =  "You Win! Paper beats Rock";
        }else if(playerSelection === 'paper' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            newDiv.textContent =  "Draw!";
        }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Scissors beats Paper";
        }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Rock beats scissors";
        }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ userWins;
            newDiv.textContent =  "You Win! Scissors beats Paper";
        }else{
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            newDiv.textContent =  "Draw!";
        }
    }
}


// code to get input from 3 buttons on the ui

start.addEventListener('click', e =>{
    div.appendChild(rock)
    div.appendChild(paper)
    div.appendChild(scissors)
    div.appendChild(newDiv2);
    div.appendChild(newDiv);
    div.appendChild(newDiv3);
    div.appendChild(userPoints);
    div.appendChild(computerPoints);
    

    
    start.style.display = 'none';
});


reset.addEventListener('click',e =>{
    newDiv3.textContent = " ";
    userPoints.textContent = " ";
    computerPoints.textContent = " ";
    
    reset.style.display = 'none';

    start.style.display = 'inline';

    userWins = 0;
    computerWins = 0;
});

rock.addEventListener('click', e =>{
    playerChoice = 'rock';
});
paper.addEventListener('click', e =>{
    playerChoice = 'paper';
});
scissors.addEventListener('click', e =>{
    playerChoice = 'scissors';
});

div.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        oneRound(playerChoice, computerChoice);
        userPoints.textContent = `User Wins:${userWins}`;
        computerPoints.textContent = `Computer Wins:${computerWins}`;

        if (userWins <= 5 || computerWins <= 5 ){

            // check who wins the 5 rounds
            if (userWins === computerWins){
                newDiv3.textContent = "Draw Game!"
                .appendChild(reset);
                //reset values for next function call
            
    
            }else if(userWins > computerWins){
                newDiv3.textContent = "You Win Game!"
                div.appendChild(reset);
                reset.style.display = 'inline';
    
                div.removeChild(rock);
                div.removeChild(paper);
                div.removeChild(scissors);
    
                newDiv.textContent = ' '
                newDiv2.textContent = ' '
            //reset value for next function call
            
        
            }else{
                newDiv3.textContent = "Computer Wins Game!"
                div.appendChild(reset);
                reset.style.display = 'inline';
    
    
                div.removeChild(rock);
                div.removeChild(paper);
                div.removeChild(scissors);
        
                newDiv.textContent = ' '
                newDiv2.textContent = ' '
                //reset value for next function call
            
            }
        }
    }
    
})

// game();