const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if((userInput === 'rock') || (userInput === 'paper')|| (userInput === 'scissors') || (userInput === 'bomb')){
    return userInput;
  } else {
    console.log('you must choose rock paper or scissors');
  }
};

// let playerChoice = getUserChoice('rock');
// console.log(playerChoice);

const getComputerChoice = ()=> {
  const randomNumber = Math.floor(Math.random() * 4);
  switch(randomNumber){
    case 0 : 
    return 'rock';
    break;

    case 1 :
    return 'paper';
    break;

    case 2 :
    return 'scissors';
    break;

    case 3 :
    return 'bomb'
    break; 

    default :
    console.log('a error has occured');
    break;
  }
}
// let comChoice = getComputerChoice();
// console.log(comChoice);

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice){
  const msg = `Your ${userChoice} and ${computerChoice} are the same which is a tie.`;
  return msg;
  } 
  if (userChoice === 'rock'){
    if(computerChoice === 'paper' || 'bomb'){
      return 'the computer has won';
    } else {
      return 'the user has won';
    }
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors' || 'bomb'){
      return 'the computer has won';
    } else {
      return 'the user has won';
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === 'rock' || 'bomb'){
      return 'the computer has won';
    } else {
      return 'the user has won';
    }
  }
  if(userChoice === 'bomb'){
    if(computerChoice === 'rock' || computerChoice === 'paper'|| computerChoice === 'scissors'){
      return 'the user has won'
      }
    } 
  }
// console.log(determineWinner('paper', 'rock'));

const playGame = ()=>{
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
