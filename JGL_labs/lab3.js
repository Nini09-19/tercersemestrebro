
let costo1 = parseFloat(prompt("Ingrese el costo del primer artículo:"));
let costo2 = parseFloat(prompt("Ingrese el costo del segundo artículo:"));
let costo3 = parseFloat(prompt("Ingrese el costo del tercer artículo:"));
let costo4 = parseFloat(prompt("Ingrese el costo del cuarto artículo:"));

//Hecho por JGL
let total = costo1 + costo2 + costo3 + costo4;

let descuento = total * 0.10;
let montoAPagar = total - descuento;

document.write("El monto total a pagar después del descuento es: $" + montoAPagar.toFixed(2));
