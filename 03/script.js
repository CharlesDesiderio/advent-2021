

const synth = new Tone.Synth().toDestination();

const playWhiteTone = (i) => {
  let whiteNotes = ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6']
  synth.triggerAttackRelease(whiteNotes[i], "8n");
}

const playBlackTone = (i) => {
  let blackNotes = ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'A3', 'B3', 'C3']
  synth.triggerAttackRelease(blackNotes[i], "8n");
}


let whiteKeys = document.querySelectorAll('.white-keys')
let blackKeys = document.querySelectorAll('.black-keys')

console.log(blackKeys)

whiteKeys.forEach((item, i) => {
  item.addEventListener('click', () => playWhiteTone(i))
})

blackKeys.forEach((item, i) => {
  item.addEventListener('click', () => playBlackTone(i))
})

// whiteKeys[0].addEventListener('click', playTone)