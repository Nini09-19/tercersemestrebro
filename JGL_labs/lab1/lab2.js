let nom = prompt("Ingrese el nombre del alumno:");


let eva1 = parseFloat(prompt("Ingrese la primera evaluación:"));
let eva2 = parseFloat(prompt("Ingrese la segunda evaluación:"));
let eva3 = parseFloat(prompt("Ingrese la tercera evaluación:"));

let prom= (eva1 + eva1 + eva3) / 3;
//Hecho por JGL
document.write("El alumno " + nom + " tiene un promedio de: " + prom.toFixed(2));
