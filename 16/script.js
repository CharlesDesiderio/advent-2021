let stars = document.querySelectorAll('.star')

const callHover = (id) => {
  for (let i = 0; i < id; i++) {
    document.getElementById(i + 1).classList.add('highlighted')
  }
}

const callRemoveHover = () => {
  for (let i = 0; i < stars.length; i++) {
    document.getElementById(i + 1).classList.remove('highlighted')
  }
}

stars.forEach((item) => {
  item.addEventListener('mouseover', () => callHover(item.id))
  item.addEventListener('mouseout', callRemoveHover)
})