let allEpisodes = document.querySelectorAll('.episode')

const toggleCheck = (id) => {
  if (document.getElementById(`${id}`).classList.contains('checked')) {
    document.getElementById(`${id}`).classList.remove('checked')
    document.getElementById(`${id}`).classList.add('unchecked')
    document.getElementById(`${id}`).children[0].src = './images/checkbox--unchecked.svg'
    
  } else {
    document.getElementById(`${id}`).classList.remove('unchecked')
    document.getElementById(`${id}`).classList.add('checked')
    document.getElementById(`${id}`).children[0].src = './images/checkbox--checked.svg'
  }
}

allEpisodes.forEach((ep) => {
  ep.addEventListener('click', (event) => toggleCheck(event.currentTarget.id))
})