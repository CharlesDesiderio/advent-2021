const toggleText = (id) => {
  if (document.getElementById(`a${id}`).classList.contains('hidden')) {
    document.getElementById(`a${id}`).classList.remove('hidden')
    document.getElementById(`a${id}`).classList.add('visible')
    document.getElementById(id).innerText = 'X'
  }
  else if (document.getElementById(`a${id}`).classList.contains('visible')) {
    document.getElementById(`a${id}`).classList.remove('visible')
    document.getElementById(`a${id}`).classList.add('hidden')
    document.getElementById(id).innerText = 'V'
  }
}


document.querySelectorAll('.toggle').forEach((item) => item.addEventListener('click', (event) => toggleText(event.target.id)))