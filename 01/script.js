let initialTime = 900
let time = initialTime

document.getElementById('progress').style.background = 'conic-gradient(#900A0A 0deg 360deg)'

let runTimer = false

const calculateTime = () => {

  let minutes = parseInt(time / 60)
  let seconds = time % 60
  
  document.getElementById('timer').innerText = `${minutes}:${seconds.toLocaleString('en-us', { minimumIntegerDigits: 2 })}`
}

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
    }, 200)
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

const setNewTime = () => {
  console.log(document.getElementById('setSeconds').value)
  let newTime = parseInt(document.getElementById('setSeconds').value) + (parseInt(document.getElementById('setMinutes').value) * 60)

  console.log(parseInt(document.getElementById('setSeconds').value) + parseInt(document.getElementById('setMinutes').value) * 60)

  time = newTime
  initialTime = newTime
  document.getElementById('progress').style.background = 'conic-gradient(#900A0A 0deg 360deg)'
  document.getElementById('setInput').style.display = 'none'
  calculateTime()
}

const showSettings = () => {
  runTimer = false
  document.getElementById('start').style.display = 'block'
  document.getElementById('pause').style.display = 'none'
  let minutes = parseInt(time / 60)
  let seconds = time % 60

  document.getElementById('setMinutes').value = minutes
  document.getElementById('setSeconds').value = seconds.toLocaleString('en-us', { minimumIntegerDigits: 2 })

  document.getElementById('setInput').style.display = 'grid'
}

calculateTime()

document.getElementById('start').addEventListener('click', startTimer)

document.getElementById('pause').addEventListener('click', pauseTimer)

document.getElementById('restart').addEventListener('click', restartTimer)

document.getElementById('changeTime').addEventListener('click', setNewTime)

document.getElementById('settings').addEventListener('click', showSettings)