const getComputerChoice = () => {
  const randomValue = Math.floor(Math.random() * 3);
  switch (randomValue) {
    case 0 :
      return "rock";
    case 1 :
      return "paper";
    case 2 :
      return "scissors";
  }
}

const getUserChoice = (userInput) => {
  userInput ? userInput = userInput.toLowerCase() : userInput = getComputerChoice();
  switch (userInput) {
    case "rock" :
    case "paper" :
    case "scissors" :
    case "bomb" :
      return userInput;  
    default :
      console.log('Error: Invalid input. Please choose rock, paper, scissors, or bomb.');
      return null;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return(`${userChoice} against ${computerChoice}. Tie.`);
  } else if (userChoice === "bomb") {
    return(`${userChoice} against ${computerChoice}. The bomb exploded, everything but the user lose.`);
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return(`${userChoice} against ${computerChoice}. Computer wins.`);
    } else {
      return(`${userChoice} against ${computerChoice}. User wins.`);
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return(`${userChoice} against ${computerChoice}. Computer wins.`);
    } else {
      return(`${userChoice} against ${computerChoice}. User wins.`);
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return(`${userChoice} against ${computerChoice}. Computer wins.`);
    } else {
      return(`${userChoice} against ${computerChoice}. User wins.`);
    }
  } 
}

/*console.log(determineWinner("rock", "scissors"));
console.log(determineWinner("rock", "paper"));
console.log(determineWinner("bomb", "rock"));*/

const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();

  console.log(`
User choose       > ${userChoice}
Computer choose   > ${computerChoice}
------------------------------`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame(); // type "bomb" to cheat