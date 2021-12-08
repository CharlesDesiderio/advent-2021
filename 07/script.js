const calcTotals = () => {
  let total = parseFloat(document.getElementById('billTotal').value)
  let tip = parseInt(document.querySelector('.highlightedTip').id) / 100
  let people = parseInt(document.getElementById('numPeople').value)
  
  let tipAmount = total * tip

  let perPerson = (total + tipAmount) / people
  
  document.getElementById('perPerson').innerText = perPerson.toFixed(2)

  document.getElementById('amount').innerText = tipAmount.toFixed(2)
}

const updateTip = (event) => {

  let tipsToUpdate = document.querySelectorAll('.tip')
  tipsToUpdate.forEach((item) => {
    item.classList.remove('highlightedTip')
    item.classList.add('unhighlightedTip')

    if (item.id === event.target.id) {

      document.getElementById(event.target.id).classList.add('highlightedTip')
    }

  })


  calcTotals()

}

document.getElementById('calculate').addEventListener('click', calcTotals)

let tips = document.querySelectorAll('.tip')

tips.forEach((item) => {
  item.addEventListener('click', (event) => updateTip(event))
})


calcTotals()