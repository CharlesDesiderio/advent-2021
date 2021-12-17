const choices = ['rock', 'paper', 'scissors']

const makeChoice = (event) => {
  let computerChoice = Math.floor(Math.random() * 3)
  let result = 'fail check'

  
  if (event.currentTarget.id === choices[computerChoice]) {
    result = 'tie'
  } else {
    
    switch (event.currentTarget.id) {
      case 'rock':
        if (choices[computerChoice] === 'paper') {
          result = 'lose'
        } else {
          result = 'win'
        }
        break;
      case 'paper':
        if (choices[computerChoice] === 'scissors') {
          result = 'lose'
        } else {
          result = 'win'
        }
        break;
      case 'scissors':
        if (choices[computerChoice] === 'rock') {
          result = 'lose'
        } else {
          result = 'win'
        }
    }
  }
  console.log(result)
}

document.getElementById('rock').addEventListener('click', (event) => makeChoice(event))
document.getElementById('paper').addEventListener('click', (event) => makeChoice(event))
document.getElementById('scissors').addEventListener('click', (event) => makeChoice(event))