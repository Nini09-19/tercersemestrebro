document.getElementById("calcular").addEventListener("click", function() {
    let suma = 0;
    let cantidad = 10;

    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        if (!isNaN(numero)) {
            suma += numero;
        } else {
            alert("Por favor, ingrese un número válido.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    let promedio = suma / cantidad;
    document.getElementById("resultado").innerText = `El promedio es: ${promedio}`;
});