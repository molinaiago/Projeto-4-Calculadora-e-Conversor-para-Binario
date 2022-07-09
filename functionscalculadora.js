function insert(num) {
 document.getElementById('resultado').innerHTML += num
}

function clean1() {
    document.getElementById('resultado').innerHTML = ''
}

function eraser() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado') .innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        alert('DIGITE UM NÚMERO')
    }
}
