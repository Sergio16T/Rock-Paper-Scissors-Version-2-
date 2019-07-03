let computerScore = 0;
let userScore = 0; 
let userScore_span = document.getElementById("user-score"); 
let compScore_span = document.getElementById("computer-score"); 
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s"); 
let gameOver_p = document.getElementById("game-over-message");


function endGame(userScore, computerScore) {
    if (userScore + computerScore == 5 && userScore > computerScore) gameOver_p.innerHTML = ' You Win! Game Over'
    if (userScore + computerScore == 5 && userScore < computerScore) gameOver_p.innerHTML = '  You lost. Game Over.'
     
}
/*  
create a function called reset which plays with resetting userscore + comp score to 0 
also add button "play again" which on event 'click' runs-> window.reload 
play with adding a score keeping span so with each 
reload keeps tabs of best 2 out of 3. 
*/

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random()* 3)); 
    return choices[randomNumber]; 
}
function convertTwoWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    else return "Scissors";
}
function win(userChoice, computerChoice) {
    if (userScore + computerScore == 5) return;
    userScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} beats ${convertTwoWord(computerChoice)}${smallCompWord}.`;  
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400);  
    
}
function lose(userChoice, computerChoice) {
    if (userScore + computerScore == 5) return;  
    computerScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} loses to ${convertTwoWord(computerChoice)}${smallCompWord}. `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400); 
       
}
function draw(userChoice, computerChoice) {
    if (userScore + computerScore == 5) return; 
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} equals ${convertTwoWord(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 400); 
}

function game(userChoice) {
   if( userScore + computerScore ==5) return; 
   const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {  
        case "rs" :
        case "pr" :
        case "sp" :
          win(userChoice, computerChoice);
          endGame(userScore, computerScore); 
          break;
        case "sr" :
        case "rp" :
        case "ps" :
          lose(userChoice, computerChoice);
          endGame(userScore, computerScore); 
          break;
        case "rr" :
        case "pp" :  
        case "ss" :
          draw(userChoice, computerChoice);
          endGame(userScore, computerScore); 
          break;
               }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
    }

main(); 

 function reset() {
     window.location.reload(); 
 }
