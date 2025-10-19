function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

document.getElementById('calcular').addEventListener('click', function() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const resultado = calcularPromedio(nota1, nota2, nota3);

    document.getElementById('resultado').textContent = `El promedio es: ${resultado}`;
});