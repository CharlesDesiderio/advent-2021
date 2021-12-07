const updateValue = () => {

  let val = document.getElementById('slide').value

  document.getElementById('price').innerText = parseFloat(val / 10).toFixed(2)

  document.getElementById('slide').style.background = `linear-gradient(to right, #EA346F ${parseInt(val) / 10}%, #4D4C53 ${parseInt(val) / 10}% 100%)`

  // background: background: linear-gradient(to right, #EA346F 50%, #4D4C53 50% 100%);;

}

document.getElementById('slide').addEventListener('input', updateValue)



