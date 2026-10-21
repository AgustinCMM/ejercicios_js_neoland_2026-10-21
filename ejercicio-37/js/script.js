// Ejercicio 37
const nombre = "Luis";
const accion = "corre";
const lugar = "parque";
const resul = document.getElementById("resultados");
const p = document.createElement("p");

p.textContent = `${nombre} ${accion} por el ${lugar}`;
resul.appendChild(p);