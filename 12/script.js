const choices = ['rock', 'paper', 'scissors']
let result

const makeChoice = (event) => {
  document.getElementById('win').style.display = 'none'
  document.getElementById('lose').style.display = 'none'
  let computerChoice = Math.floor(Math.random() * 3)
  console.log('choice check')
  result = 'fail check'
  
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

  document.getElementById('playerResult').src = `./images/${event.currentTarget.id}.png`
  document.getElementById('computerResult').src = `./images/${choices[computerChoice]}.png`

  document.getElementById('choices').style.display = 'none'
  document.getElementById('results').style.display = 'flex'

  if (result === 'win') {
    document.getElementById('lose').style.display = 'none'
    document.getElementById('win').style.display = 'block'
  }
  if (result === 'lose') {
    document.getElementById('win').style.display = 'none'
    document.getElementById('lose').style.display = 'block'
  }

}

const playAgain = () => {
  document.getElementById('choices').style.display = 'flex'
  document.getElementById('results').style.display = 'none'

}

document.getElementById('rock').addEventListener('click', (event) => makeChoice(event))
document.getElementById('paper').addEventListener('click', (event) => makeChoice(event))
document.getElementById('scissors').addEventListener('click', (event) => makeChoice(event))

document.getElementById('playAgain').addEventListener('click', playAgain)