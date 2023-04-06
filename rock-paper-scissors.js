
//new elements to be appended

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

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';
reset.textContent = 'Reset Game';



//variables to save user wins and computer wins
let userWins = 0;
let computerWins = 0; 
let playerChoice = '';
let computerChoice = '';

const randomChoice = function getComputerChoice(){

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

    /*BUG ALERT!! these variables have to be in the oneround function so as to prevent 
    one value being used in the entire loop over and over*/
    const playerSelection = playerPlay;
    const computerSelection = computerPlay();

    if(userWins < 5 && computerWins < 5){
        //check to see who wins round
        if(playerSelection === 'rock' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            newDiv.textContent =  "Draw!";
        }else if(playerSelection === 'rock' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Paper beats Rock";
        }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            ++ userWins;
            newDiv.textContent =  "You Win! Rock beats Scissors";
        }else if(playerSelection === 'paper' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`
            ++ userWins;
            newDiv.textContent =  "You Win! Paper beats Rock";
        }else if(playerSelection === 'paper' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            newDiv.textContent =  "Draw!";
        }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Scissors beats Paper";
        }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            ++ computerWins ;
            newDiv.textContent =  "You Lose! Rock beats scissors";
        }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            ++ userWins;
            newDiv.textContent =  "You Win! Scissors beats Paper";
        }else{
            newDiv2.textContent = `Computer Choice: ${computerSelection}`;
            newDiv.textContent =  "Draw!";
        }
    }
};



//append created elements
start.addEventListener('click', e =>{
    div.appendChild(rock);
    div.appendChild(paper);
    div.appendChild(scissors);
    div.appendChild(newDiv2);
    div.appendChild(newDiv);
    div.appendChild(newDiv3);
    div.appendChild(userPoints);
    div.appendChild(computerPoints);
    div.appendChild(reset);
    

    
    start.style.display = 'none';
    reset.style.display = 'none';

});

//reset everything for next round to prevent bugs
reset.addEventListener('click', e =>{
    userWins = 0;
    computerWins = 0;
    computerChoice = '';
    playerChoice = '';

    
    newDiv3.textContent = "";
    userPoints.textContent = '';
    computerPoints.textContent = '';

    div.removeChild(userPoints);
    div.removeChild(computerPoints);
    div.removeChild(newDiv3);
    div.removeChild(reset);

    start.style.display = 'inline';
});


//listen and set values
rock.addEventListener('click', e =>{
    playerChoice = 'rock';
    computerChoice = randomChoice;
});

paper.addEventListener('click', e =>{
    playerChoice = 'paper';
    computerChoice = randomChoice;
});

scissors.addEventListener('click', e =>{
    playerChoice = 'scissors';
    computerChoice = randomChoice;
});


// ALWAYS DRY!! put this in one listener to prevent it from being put in each button
div.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        oneRound(playerChoice, computerChoice);
        userPoints.textContent = `User Wins:${userWins}`;
        computerPoints.textContent = `Computer Wins:${computerWins}`;

        if (userWins === 5 || computerWins === 5 ){

            // check who wins the 5 rounds
            
            if(userWins > computerWins){
                newDiv3.textContent = "You Win Game!"
                reset.style.display = 'inline';

                newDiv2.textContent = '';
                newDiv.textContent = '';
    
                div.removeChild(rock);
                div.removeChild(paper);
                div.removeChild(scissors);
                div.removeChild(newDiv);
                div.removeChild(newDiv2);
                
                
            
        
            }else{
                newDiv3.textContent = "Computer Wins Game!"
                reset.style.display = 'inline';
    
                newDiv2.textContent = '';
                newDiv.textContent = '';

                div.removeChild(rock);
                div.removeChild(paper);
                div.removeChild(scissors);
                div.removeChild(newDiv);
                div.removeChild(newDiv2);
                
                
            
            }
        }
    }
    
});

