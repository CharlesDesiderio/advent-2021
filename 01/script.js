let initialTime = 900
let time = initialTime

document.getElementById('progress').style.background = 'conic-gradient(#900A0A 0deg 360deg)'

let runTimer = false

const calculateTime = () => {

  let minutes = parseInt(time / 60)
  let seconds = time % 60
  
  document.getElementById('timer').innerText = `${minutes}:${seconds.toLocaleString('en-us', { minimumIntegerDigits: 2 })}`
}

console.log((time / initialTime) * 360 )

const doTimer = () => {
  if (time <= 0) {
    document.getElementById('progress').style.background = `conic-gradient(green 0deg 360deg)`
    document.getElementById('restart').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
    return
  }

  if (runTimer === true) {
    time--
    let progressPercent = parseInt((time / initialTime) * 360)
    document.getElementById('progress').style.background = `conic-gradient(#900A0A 0deg ${progressPercent}deg, #000000 ${progressPercent}deg 360deg)`

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

const restartTimer = () => {
  time = initialTime
  runTimer = true
  document.getElementById('restart').style.display = 'none'
  document.getElementById('pause').style.display = 'block'
  doTimer()
}

calculateTime()

document.getElementById('start').addEventListener('click', startTimer)

document.getElementById('pause').addEventListener('click', pauseTimer)

document.getElementById('restart').addEventListener('click', restartTimer)