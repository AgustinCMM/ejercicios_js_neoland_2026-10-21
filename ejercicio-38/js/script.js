// Ejercicio 38
let vacio = [];
vacio[4] = "Hola";

console.log(vacio.length);
console.log(vacio);

vacio.forEach((item, index)=> {
    console.log(vacio[item], vacio[index]);
});