console.log("Game has begun.");

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

function playRound(userSelection, computerSelection) {
    let userChoiceNoCaps = userSelection.toLowerCase();

    if (userChoiceNoCaps === computerSelection) {
        return `It's a tie! You both chose ${userChoiceNoCaps}.`;
    } else if ((userChoiceNoCaps === "rock" && computerSelection === "scissors") ||
        (userChoiceNoCaps === "scissors" && computerSelection === "paper") ||
        (userChoiceNoCaps === "paper" && computerSelection === "rock")) {
        return `You win! ${userChoiceNoCaps} beats ${computerSelection}.`;
    } else if ((userChoiceNoCaps === "rock" && computerSelection === "paper") ||
        (userChoiceNoCaps === "paper" && computerSelection === "scissors") ||
        (userChoiceNoCaps === "scissors" && computerSelection === "rock")) {
        return `You lose. Your ${userChoiceNoCaps} was beaten by ${computerSelection}.`;
        } else {
        return "playRound Error";
        }
}

let computerSelection = computerPlay();
// let userSelection = prompt("Rock, Paper, or Scissors?");



console.log(playRound(userSelection, computerSelection));

let userSelection = prompt("Rock, Paper, or Scissors?");