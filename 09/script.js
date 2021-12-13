let selectedImage = 0

const pickImg = (i) => {
  document.getElementById(`${selectedImage}`).classList.remove('selectedImage')
  selectedImage = i
  document.getElementById(`${selectedImage}`).classList.add('selectedImage')
  document.getElementById('fullImg').innerHTML = `
<img src="./images/${pictures[selectedImage].img}" /><span>${pictures[selectedImage].desc}</span>`
}

const stepImage = (dir) => {

  switch(dir) {
    case 'left':
      if (selectedImage === 0) {
        pickImg(pictures.length - 1)
      } else {
        pickImg(selectedImage - 1)
      }
      break;
    case 'right': 
    if (selectedImage === pictures.length -1) {
      pickImg(0)
    } else {
      pickImg(selectedImage + 1)
    }
    break;
  }
}

const pictures = [
{
  img: `sherman-yang-VBBGigIuaDY-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@emp_creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sherman Yang</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `jakob-owens-EwRM05V0VSI-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakob Owens</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@finding_dan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Grinwis</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `vincentiu-solomon-ln5drpv_ImI-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@vincentiu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincentiu Solomon</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `silas-baisch-Wn4ulyzVoD4-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Silas Baisch</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `dave-hoefler-okUIdo6NxGo-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Hoefler</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@eugene_golovesov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugene Golovesov</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@jenreyn0lds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jennifer reynolds</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `kellen-riggin-SIBOiXKg0Ds-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@kalaniparker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kellen Riggin</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@rhweht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rafael Hoyos</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
{
  img: `sonya-romanovska-wzdXhyi3AiM-unsplash.jpg`,
  desc: `Photo by <a href="https://unsplash.com/@sonya_romanovska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sonya Romanovska</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
},
]

document.getElementById('fullImg').innerHTML = `
<img src="./images/${pictures[0].img}" /><span>${pictures[0].desc}</span>`

pictures.forEach((image, i) => {
  const img = document.createElement('img')
  img.id = i
  img.addEventListener('click', () => pickImg(i))
  img.src = `./images/${image.img}`
  document.getElementById('carousel').appendChild(img)
  document.getElementById('0').classList.add('selectedImage')
})

document.getElementById('left').addEventListener('click', (event) => stepImage(event.currentTarget.id))

document.getElementById('right').addEventListener('click', (event) => stepImage(event.currentTarget.id))