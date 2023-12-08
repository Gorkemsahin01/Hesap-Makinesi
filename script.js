const tuslar = document.getElementById('butonlar')
const calcScreen = document.getElementById('screen')
const hesapla = document.getElementById('hesapla')
const temizle = document.getElementById('temizle')
tuslar.addEventListener('click', function (e) {
  const clickedButtonValue = e.target.innerText
  // console.log(clickedButtonValue)

  appendValue()
  function appendValue(value) {
    calcScreen.value += clickedButtonValue
  }
})

hesapla.addEventListener('click', hesap)

function hesap() {
  calcScreen.value = eval(calcScreen.value)
}

temizle.addEventListener('click', temizleme)

function temizleme() {
  calcScreen.value = ''
}
