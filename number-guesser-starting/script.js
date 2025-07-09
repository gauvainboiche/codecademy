let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess must be between 0 and 9.");
        return false;
    }
    
    const humanDiff = Math.abs(target - humanGuess);
    const computerDiff = Math.abs(target - computerGuess);
    
    return humanDiff <= computerDiff;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
    console.log(`Current Round: ${currentRoundNumber}`);
}