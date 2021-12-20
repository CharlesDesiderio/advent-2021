const showModal = () => {
  document.getElementById('product').style.display = 'flex'
}

const hideModal = () => {
  document.getElementById('product').style.display = 'none'
}


document.getElementById('trigger').addEventListener('click', showModal)
document.getElementById('close').addEventListener('click', hideModal)