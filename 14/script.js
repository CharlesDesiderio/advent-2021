let now = new Date()

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let selectedMonth = now.getMonth()
let selectedYear = now.getFullYear()

const changeYear = (direction) => {
  if (direction === 'next') {
    selectedYear++
  } else {
    selectedYear--
  }
  renderCalendar()
}

const changeMonth = (direction) => {
  if (direction === 'next') {
    if (selectedMonth + 1 === 12) {
      selectedMonth = 0
      changeYear('next')
    } else {
      selectedMonth++
      renderCalendar()
    }
  }
  if (direction === 'prev') {
    if (selectedMonth - 1 === -1) {
      selectedMonth = 11
      changeYear('prev')
    } else {
      selectedMonth--
      renderCalendar()
    }
  }
}

const renderCalendar = () => {
  
  document.getElementById('month').innerText = months[selectedMonth]
  
  let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate()
  document.getElementById('dayGrid').innerHTML = ''
  
  let firstOfMonth = new Date(selectedYear, selectedMonth).getDay()
  
  for (let i = 0; i < firstOfMonth; i++) {
    document.getElementById('dayGrid').innerHTML += `<span></span>`
  }
  
  for (let i = 1; i <= daysInMonth; i++ ) {
    // console.log(new Date(Date.now()).getDate())
    // console.log(new Date(Date.now()).getFullYear())
    // console.log(new Date(Date.now()).getMonth())

    if (new Date(Date.now()).getDate() === i && new Date(Date.now()).getFullYear() === selectedYear && new Date(Date.now()).getMonth() === selectedMonth) {
      document.getElementById('dayGrid').innerHTML += `<span class="today">${i}</span>`
    }
    document.getElementById('dayGrid').innerHTML += `<span>${i}</span>`
  }

}

document.getElementById('next').addEventListener('click', () => changeMonth('next'))

document.getElementById('prev').addEventListener('click', () => changeMonth('prev'))

renderCalendar()