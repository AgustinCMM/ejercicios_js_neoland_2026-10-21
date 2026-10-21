// Ejercicio 22
const texto = document.getElementById("texto");
const btn = document.getElementById("btn");

let arreglo = [];

btn.addEventListener("click", () => {
  arreglo.push(texto.value);
  texto.value = "";

  console.log(arreglo);
});
