function insert (numero) {
let num = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = num + numero;
}

function clean() {
document.getElementById('resultado').innerHTML = '';
}

function back() {
let num = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = num.substring(0, num.length - 1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}