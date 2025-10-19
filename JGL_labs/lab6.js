function calcularSueldo(horasTrabajadas) {
    const pagoPorHora = 40;
    let sueldo = 0;

    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * pagoPorHora;
    } else {
        const horasExtras = horasTrabajadas - 40;
        sueldo = (40 * pagoPorHora) + (horasExtras * pagoPorHora * 2);
    }

    document.write(`Sueldo semanal: $${sueldo.toFixed(2)}<br>`);
}


//Hecho por JGL
const horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas en la semana:"));

if (!isNaN(horasTrabajadas) && horasTrabajadas >= 0) {
    calcularSueldo(horasTrabajadas);
} else {
    document.write("Por favor, ingrese un número válido de horas trabajadas.<br>");
}
