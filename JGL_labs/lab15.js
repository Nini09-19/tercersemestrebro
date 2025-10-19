function calcularPerimetroRectangulo(largo, ancho) {
    const perimetro = 2 * (largo + ancho);
    return perimetro;
}

document.getElementById('calcular').addEventListener('click', function() {
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);

    if (!isNaN(largo) && !isNaN(ancho)) {
        const resultado = calcularPerimetroRectangulo(largo, ancho);

        document.getElementById('resultado').textContent = `El perímetro del rectángulo es: ${resultado} unidades.`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa valores numéricos válidos.';
    }
});