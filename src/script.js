function changeOperation(signal, num = null) {
  if (!num) {
    for (var i = 1; i <= 10; i++) {
      calculate(i, signal)
      renderTab()
    }
    return;
  }
  calculate(num, signal)
}

function calculate(i, signal) {
  var table = createTable()
  for (var j = 1; j <= 10; j++) {
    var result = i + signal + j + " = "  + arred(eval(i + signal + j), 2)
    renderResult(table, result)
  }
}

function arred(d,casas) {
   var aux = Math.pow(10,casas)
   return Math.floor(d * aux)/aux
}

function renderTab() {
  // document.getElementById('tabuada').innerHTML += "<hr>";
}

function clearTab() {
  document.getElementById('tabuada').innerHTML = ""
}

function createTable() {
  var table = document.createElement('table')
  table.setAttribute('class', 'my-class')
  document.getElementById('tabuada').appendChild(table);
  return table
}

function renderResult(table, result) {
  table.innerHTML += "<tr><td>" + result + "</td></tr>"
}

document.getElementById('operacao').addEventListener('change', function() {
  clearTab()
  if (!this.value) return false
  var numero = document.getElementById('numero').value;
  changeOperation(this.value, numero)
})
