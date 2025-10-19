function calcularDescuento(subtotal) {
    let descuento = 0;
    if (subtotal >= 300) {
        descuento = subtotal * 0.20;
    }
    let total = subtotal - descuento;
    document.write(`Subtotal: $${subtotal.toFixed(2)}<br>`);
    document.write(`Descuento: $${descuento.toFixed(2)}<br>`);
    document.write(`Total a pagar: $${total.toFixed(2)}<br>`);
}
//Hecho por JGL

const subtotal = parseFloat(prompt("Ingrese el subtotal de la compra:"));

if (!isNaN(subtotal)) {
    calcularDescuento(subtotal);
} else {
    document.write("Por favor, ingrese un número válido.<br>");
}
