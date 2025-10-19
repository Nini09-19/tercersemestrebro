let i = 1;
let resultado = '';

do {
    resultado += i + '<br>';
    i++;
} while (i <= 10);

document.getElementById('resultado').innerHTML = resultado;