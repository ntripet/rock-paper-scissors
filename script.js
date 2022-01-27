
// Randomize computer's choice
function computerPlay() {
    let oneThruThree = Math.floor((Math.random() * 3) + 1);
    if (oneThruThree === 1) {
        return "rock";
    } else if (oneThruThree === 2) {
        return "paper";
    } else if (oneThruThree === 3) {
        return "scissors";
        } 
    else {
        return "computerPlay Error";
    }
}

// Logic to decide winner given user's and computer's choice
function playRound(userSelection, computerSelection, userPoints, computerPoints) {
    let userChoiceNoCaps = userSelection.toLowerCase();
// Checking for tie, then win, then lose. Returns results in a string and updated points for each player 
    if (userChoiceNoCaps === computerSelection) {
        return [`It's a tie! You both chose ${userChoiceNoCaps}.`, userPoints, computerPoints];
    } else if ((userChoiceNoCaps === "rock" && computerSelection === "scissors") ||
        (userChoiceNoCaps === "scissors" && computerSelection === "paper") ||
        (userChoiceNoCaps === "paper" && computerSelection === "rock")) {
        return [`You win! ${userChoiceNoCaps} beats ${computerSelection}.`, (userPoints += 1), computerPoints];
    } else if ((userChoiceNoCaps === "rock" && computerSelection === "paper") ||
        (userChoiceNoCaps === "paper" && computerSelection === "scissors") ||
        (userChoiceNoCaps === "scissors" && computerSelection === "rock")) {
        return [`You lose. Your ${userChoiceNoCaps} was beaten by ${computerSelection}.`, userPoints, (computerPoints += 1)];
    } else {
        return "playRound Error";
        }
}

function game(userPoints = 0, computerPoints = 0) {
    computerSelection = computerPlay();
    userSelection = prompt("Rock, Paper, or Scissors?"); 
    let gameArray = playRound(userSelection, computerSelection, userPoints, computerPoints);
    console.log(gameArray[0]);
    console.log("Your points: " + gameArray[1]);
    console.log("Enemy's points: " + gameArray[2]);
//Plays until desired points
    if ((gameArray[1] !== playUntilPoints) && (gameArray[2] !== playUntilPoints)) {
    console.log(" ");
    game (gameArray[1], gameArray[2]);
    } else {
    return;
    }
} 

let playUntilPoints = Number(prompt("How many points would you like to play to? Enter a number."));
console.log(`Game has begun. Playing to ${playUntilPoints} points.`);
console.log(" ");

game();









