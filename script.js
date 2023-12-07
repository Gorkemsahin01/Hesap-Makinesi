const tuslar = document.getElementById('butonlar')
const calcScreen = document.getElementById('hesap')

tuslar.addEventListener('click', function (event) {
  const clickedButtonValue = event.target.innerText
  console.log(clickedButtonValue)

  appendValue()
  function appendValue(value) {
    calcScreen.value += clickedButtonValue

    if (appendValue(value) == '') {
      calcScreen.value += clickedButtonValue
    }
  }
})
