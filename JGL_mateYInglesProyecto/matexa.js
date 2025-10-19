function calcular() {
    // Valores correctos
    const x1 = 2, y1 = 3, x2 = 7, y2 = 8;
    const restaX = x2 - x1; // 5
    const restaY = y2 - y1; // 5
    const cuadradoX = Math.pow(restaX, 2); // 25
    const cuadradoY = Math.pow(restaY, 2); // 25
    const sumaCuadrados = cuadradoX + cuadradoY; // 50
    const resultadoFinal = Math.sqrt(sumaCuadrados).toFixed(2); // 7.07

    // Acumular mensajes de error
    let errores = [];

    // Verificar cada paso y acumular errores si están incorrectos
    verificarPaso("input-x2", x2, "x₂ debe ser 7", errores);
    verificarPaso("input-x1", x1, "x₁ debe ser 2", errores);
    verificarPaso("input-y2", y2, "y₂ debe ser 8", errores);
    verificarPaso("input-y1", y1, "y₁ debe ser 3", errores);
    verificarPaso("input-restaX", restaX, "x₂ - x₁ debe ser 5", errores);
    verificarPaso("input-restaY", restaY, "y₂ - y₁ debe ser 5", errores);
    verificarPaso("input-cuadradoX", cuadradoX, "(x₂ - x₁)² debe ser 25", errores);
    verificarPaso("input-cuadradoY", cuadradoY, "(y₂ - y₁)² debe ser 25", errores);
    verificarPaso("input-sumaCuadrados", sumaCuadrados, "La suma de cuadrados debe ser 50", errores);
    verificarPaso("input-resultadoFinal", resultadoFinal, "El resultado final debe ser 7.07", errores);

    // Mostrar mensajes de error acumulados
    const errorMensajes = document.getElementById("error-mensajes");
    errorMensajes.innerHTML = errores.length > 0 ? errores.join("<br>") : "";

    // Mostrar mensaje final
    const mensaje = document.getElementById("mensaje");
    if (errores.length === 0) {
        mensaje.textContent = "¡Todas las respuestas son correctas!";
        mensaje.style.color = "#4CAF50";
    } else {
        mensaje.textContent = "Algunas respuestas son incorrectas. Revisa los errores abajo.";
        mensaje.style.color = "#F44336";
    }
}

function verificarPaso(id, valorCorrecto, mensajeError, errores) {
    const input = document.getElementById(id);

    if (parseFloat(input.value) === parseFloat(valorCorrecto)) {
        input.classList.remove("incorrecto");
        input.classList.add("correcto");
    } else {
        input.classList.remove("correcto");
        input.classList.add("incorrecto");
        errores.push(mensajeError); // Añadir mensaje de error a la lista
    }
}
