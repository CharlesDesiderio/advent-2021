const autoPaste = (event) => {

  let data = event.clipboardData.getData('Text')
  
  document.getElementById('1').value = data[0]
  document.getElementById('2').value = data[1]
  document.getElementById('3').value = data[2]
  document.getElementById('4').value = data[3]

}

const nextInput = (event) => {
  if (event.target.value.length > 1) {
    event.target.value = event.target.value[0]
  }
  
  if (event.target.id !== '4' && event.target.value.length) {
    event.target.nextElementSibling.focus()
  }
}

const checkInputs = () => {
  let concatData = `Success! Your code is ${document.getElementById('1').value}${document.getElementById('2').value}${document.getElementById('3').value}${document.getElementById('4').value}`
  alert(concatData)
}

document.getElementById('1').addEventListener('keyup', (event) => nextInput(event))
document.getElementById('2').addEventListener('keyup', (event) => nextInput(event))
document.getElementById('3').addEventListener('keyup', (event) => nextInput(event))
document.getElementById('4').addEventListener('keyup', (event) => nextInput(event))

document.addEventListener('paste', (event) => autoPaste(event));

document.getElementById('verify').addEventListener('click', checkInputs)