let now = new Date
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

document.getElementById('month').innerText = months[now.getMonth()]

let daysInMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate() + 1

document.getElementById('dayGrid').innerHTML = ''

let firstOfMonth = new Date(now.getFullYear(), now.getMonth()).getDay()

// console.log(firstOfMonth.getDay())

for (let i = 0; i < firstOfMonth; i++) {
  document.getElementById('dayGrid').innerHTML += `<span></span>`
  console.log('nyah')
}

for (let i = 1; i <= daysInMonth; i++ ) {
  document.getElementById('dayGrid').innerHTML += `<span>${i}</span>`
}

