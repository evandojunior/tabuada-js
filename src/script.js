function changeOperation(signal, num = null) {
  if (!num) {
    for (var i = num; i <= 10; i++) {
      calculate(i, signal)
      renderTab()
    }
    return;
  }
  calculate(num, signal)
}

function calculate(i, signal) {
  for (var j = 1; j <= 10; j++) {
    renderResult(i + signal + j + " = " + eval(i + signal + j))
  }
}

function renderTab() {
  document.getElementById('tabuada').children[0].innerHTML += "<hr>";
}

function clearTab() {
  document.getElementById('tabuada').children[0].innerHTML = ""
}

function renderResult(result) {
  document.getElementById('tabuada').children[0].innerHTML += "<tr><td>" + result + "</td></tr>"
}

document.getElementById('operacao').addEventListener('change', function() {
  clearTab()
  if (!this.value) return false
  var numero = document.getElementById('numero').value;
  changeOperation(this.value, numero)
})
