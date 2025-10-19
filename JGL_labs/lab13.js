document.getElementById("generar").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let resultado = "";

    checkboxes.forEach(checkbox => {
        const numero = parseInt(checkbox.value);
        for (let i = 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}\n`;
        }
        resultado += "\n"; // Añadir un espacio entre tablas
    });

    if (resultado === "") {
        resultado = "Por favor, seleccione al menos un número.";
    }
    
    document.getElementById("resultado").innerText = resultado;
});