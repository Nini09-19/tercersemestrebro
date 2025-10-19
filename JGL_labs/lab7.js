function mostrarInputs() {
    const shape = document.getElementById('shape').value;
    const inputsDiv = document.getElementById('inputs');
    
    let inputsHTML = '';

    if (shape === 'cuadrado') {
        inputsHTML = '<label for="lado">Lado:</label><input type="number" id="lado" required>';
    } else if (shape === 'rectangulo') {
        inputsHTML = `
            <label for="base">Base:</label><input type="number" id="base" required>
            <label for="altura">Altura:</label><input type="number" id="altura" required>`;
    } else if (shape === 'triangulo') {
        inputsHTML = `
            <label for="baseTri">Base:</label><input type="number" id="baseTri" required>
            <label for="alturaTri">Altura:</label><input type="number" id="alturaTri" required>`;
    } else if (shape === 'circulo') {
        inputsHTML = '<label for="radio">Radio:</label><input type="number" id="radio" required>';
    }
    
    inputsDiv.innerHTML = inputsHTML;
}

function calcular() {
    const shape = document.getElementById('shape').value;
    let area, perimetro;

    if (shape === 'cuadrado') {
        const lado = parseFloat(document.getElementById('lado').value);
        area = lado * lado;
        perimetro = lado * 4;
    } else if (shape === 'rectangulo') {
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        area = base * altura;
        perimetro = 2 * (base + altura);
    } else if (shape === 'triangulo') {
        const baseTri = parseFloat(document.getElementById('baseTri').value);
        const alturaTri = parseFloat(document.getElementById('alturaTri').value);
        area = (baseTri * alturaTri) / 2;
        // Supongamos que es un triángulo equilátero para el perímetro
        perimetro = baseTri * 3; 
    } else if (shape === 'circulo') {
        const radio = parseFloat(document.getElementById('radio').value);
        area = Math.PI * radio * radio;
        perimetro = 2 * Math.PI * radio;
    }

    document.getElementById('result').innerHTML = `Área: ${area.toFixed(2)}<br>Perímetro: ${perimetro.toFixed(2)}`;
}

document.getElementById('shape').addEventListener('change', mostrarInputs);
