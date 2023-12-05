const sayiButton = document.getElementById('butonlar')
const btn1 = document.querySelectorAll('btn')
const hesaplama = document.getElementsByClassName('hesap')

let a = sayiButton.innerText
console.log(a)

function ekranayazdirma() {
  sayiButton.innerText = hesaplama
}

let b = hesaplama.innerText
console.log(b)

sayiButton.addEventListener('click', ekranayazdirma)
