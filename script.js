const calculateButton = document.getElementById('calculate')
const valueInput = document.getElementById('value')
const feeInput = document.getElementById('fee')
const timeInput = document.getElementById('time')
const resultElement = document.getElementById('result')

function calculateTotal() {
  const value = parseFloat(valueInput.value)
  const fee = parseFloat(feeInput.value) / 100
  const time = parseFloat(timeInput.value)

  const total = value * Math.pow(1 + fee, time)
  const formattedTotal = 'R$' + total.toFixed(2)

  console.log(total)
  resultElement.innerHTML = formattedTotal
}

calculateButton.addEventListener('click', calculateTotal)
