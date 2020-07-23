let readlineSync = require('readline-sync')
let userName = readlineSync.question('What is your name?')
const myGameCode = () => {
  let userChoice = readlineSync.question(
    'Do you choose rock, paper or scissors?'
  )
  let computerChoice = Math.random()
  if (computerChoice < 0.34) {
    computerChoice = 'rock'
  } else if (computerChoice <= 0.67) {
    computerChoice = 'paper'
  } else {
    computerChoice = 'scissors'
  }
  let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
      console.log('The result is a tie!')
    }
    if (choice1 === 'rock') {
      if (choice2 === 'paper') {
        console.log('paper wins')
      } else {
        if (choice2 === 'scissors') console.log('rock wins')
      }
    }
    if (choice1 === 'paper') {
      if (choice2 === 'rock') {
        console.log('paper wins')
      } else {
        if (choice2 === 'scissors') {
          console.log('scissors wins')
        }
      }
      if (choice1 === 'scissors') {
        if (choice2 === 'rock') {
          console.log('rock wins')
        } else {
          if (choice2 === 'paper') {
            console.log('scissors wins')
          }
        }
      }
    }
  }
  console.log(userName + ' ' + userChoice)
  console.log('Computer Choice: ' + computerChoice)
  compare(userChoice, computerChoice)
  if (readlineSync.keyInYN('Want to play again?')) {
    myGameCode()
  } else {
    return
  }
}
myGameCode()