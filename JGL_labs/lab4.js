function determinarCuadradoRectangulo(lado1, lado2) {
    if (lado1 === lado2) {
        document.write("Es un cuadrado.<br>");
    } else {
        document.write("Es un rectángulo.<br>");
    }
}
//Hecho por JGL
const lado1 = parseFloat(prompt("Ingrese el primer lado:"));
const lado2 = parseFloat(prompt("Ingrese el segundo lado:"));

determinarCuadradoRectangulo(lado1, lado2);