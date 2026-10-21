// Ejercicio 21
const paises = ["España", "Argentina", "Venezuela"];
const resultados = document.getElementById('resultados');

paises.forEach((item, index) => {
  const p = document.createElement("p");
  p.textContent = item;
  resultados.appendChild(p);
});