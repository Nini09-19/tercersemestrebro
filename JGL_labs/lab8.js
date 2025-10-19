document.getElementById('evaluation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const evaluation1 = parseFloat(document.getElementById('evaluation1').value);
    const evaluation2 = parseFloat(document.getElementById('evaluation2').value);
    
    const average = (evaluation1 + evaluation2) / 2;
    let message;

    if (average === 100) {
        message = "Excelente.";
    } else if (average >= 90) {
        message = "Muy Bien.";
    } else if (average >= 80) {
        message = "Bien.";
    } else if (average >= 70) {
        message = "Regular.";
    } else if (average >= 60) {
        message = "Necesita mejorar.";
    } else {
        message = "No acredita, necesita asesorías.";
    }
//hecho por JGL
    document.getElementById('result').innerHTML = `
        Promedio: ${average.toFixed(2)}<br>
        Comentario: ${message}
    `;
});
