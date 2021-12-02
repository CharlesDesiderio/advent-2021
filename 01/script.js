let time = 900

let runTimer = false

const calculateTime = () => {

  let minutes = parseInt(time / 60)
  let seconds = time % 60
  
  document.getElementById('timer').innerText = `${minutes}:${seconds.toLocaleString('en-us', { minimumIntegerDigits: 2 })}`
}


const doTimer = () => {
  if (time <= 0) {
    return
  }

  if (runTimer === true) {
    time--
    calculateTime()
    setTimeout(() => {
      doTimer()
    }, 1000)
  }
}

const startTimer = () => {
  runTimer = true
  document.getElementById('start').style.display = 'none'
  document.getElementById('pause').style.display = 'block'
  doTimer()
}

const pauseTimer = () => {
  runTimer = false
  document.getElementById('start').style.display = 'block'
  document.getElementById('pause').style.display = 'none'
  doTimer()
}

calculateTime()

document.getElementById('start').addEventListener('click', startTimer)

document.getElementById('pause').addEventListener('click', pauseTimer)