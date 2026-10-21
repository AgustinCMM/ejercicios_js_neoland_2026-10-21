// Ejercicio 40
const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");
const resul = document.getElementById("resultados");

btn.addEventListener("click", () => {
    const texto = entrada.value.trim();
    
    if (texto === "") {
        resul.textContent = "Por favor, escribe una oración.";
    }
    
    const palabras = texto.split(" ");
    const cantidad = palabras.length;
    
    resul.textContent = `La oración tiene ${cantidad} palabras.`;
});