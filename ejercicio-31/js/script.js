// Ejercicio 31
const h1 = document.createElement("h1");
const resul = document.getElementById("resultados");
h1.textContent = "¡Feliz año nuevo!"

for (let i=10; i>=0; i--) {
    console.log(i);
    if (i == 0) {
        resul.appendChild(h1);
    }
}