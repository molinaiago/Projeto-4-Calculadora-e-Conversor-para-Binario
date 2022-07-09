var c = document.getElementById('txtn')
var res = document.getElementById('tabuada')

function calcular() {
    if (c.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var g = Number(c.value)
        res.innerHTML = ''
        var bin = (g).toString(2)
        res.innerHTML += (`${bin}`)
      }
    }
