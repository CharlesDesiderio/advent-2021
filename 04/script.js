let allKeys = document.querySelectorAll('.key')
let randomKey

const pickKey = () => {
  randomKey = Math.floor(Math.random() * allKeys.length)
  allKeys[randomKey].classList.add('wiggleKey')
  if (!allKeys[randomKey]) {
    // Occasionally a key gets picked that seems to come up undefined. Seems to happen with D, but I can't figure out anything weird. Just making it pick a new key if that happens. I think I fixed this but I'm leaving it here as a safeguard anyway.
    pickKey()
  }
}

const detectKey = (event) => {

  if (event.key.toUpperCase() === allKeys[randomKey].id) {
    resetKey()
  }
  if (!document.getElementById(event.key.toUpperCase())) {
    return
  } else {
    document.getElementById(event.key.toUpperCase()).classList.add('wrongKey')
    setTimeout(() => {
      document.getElementById(event.key.toUpperCase()).classList.remove('wrongKey')
    }, 100);
    return
  }
}

const resetKey = () => {
  allKeys[randomKey].classList.remove('wiggleKey')
  pickKey()
}

pickKey()

document.addEventListener('keyup', (event) => detectKey(event))
