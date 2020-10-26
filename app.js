String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const baseResult = 'Try to beat me... 🦾'

let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('rock-choice')
const paper_div = document.getElementById('paper-choice')
const scissors_div = document.getElementById('scissors-choice')
const actionMessage_div = document.getElementById('action-message')

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const rdm = Math.floor(Math.random() * choices.length)
  return choices[rdm]
}

function win (userChoice, computerChoice) {
  userScore++
  result_div.innerHTML = `Win 🎉! ${userChoice.capitalize()} beats ${computerChoice}`
  userScore_span.innerText = userScore
  document.getElementById(userChoice+'-choice').classList.add('green-glow')

  setTimeout(() => {
    document.getElementById(userChoice+'-choice').classList.remove('green-glow')
    result_div.innerHTML = baseResult
  }, 2000)
}

function lose (userChoice, computerChoice) {
  computerScore++
  result_div.innerHTML = `Lost 😣. ${computerChoice.capitalize()} beats ${userChoice}`
  computerScore_span.innerText = computerScore
  document.getElementById(userChoice+'-choice').classList.add('red-glow')

  setTimeout(() => {
    document.getElementById(userChoice+'-choice').classList.remove('red-glow')
    result_div.innerHTML = baseResult
  }, 2000)
}

function draw (userChoice) {
  result_div.innerHTML = 'It\'s a draw 😕'
  document.getElementById(userChoice+'-choice').classList.add('gray-glow')

  setTimeout(() => {
    document.getElementById(userChoice+'-choice').classList.remove('gray-glow')
    result_div.innerHTML = baseResult
  }, 2000)
}

function game (choice) {
  const computerChoice = getComputerChoice()
  const winning = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}
  actionMessage_div.innerHTML = `You picked ${choice}`


  switch (choice + computerChoice) {
    case 'rockscissors':
    case 'scissorspaper':
    case 'paperrock':
      win(choice, computerChoice)
      break
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      lose(choice, computerChoice)
      break
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(choice)
      break
  }
}

function main () {
  result_div.innerHTML = baseResult

  rock_div.addEventListener('click', () => game('rock'))
  paper_div.addEventListener('click', () => game('paper'))
  scissors_div.addEventListener('click', () => game('scissors'))
}

main()
