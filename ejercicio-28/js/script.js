// Ejercicio 28
const btn = document.createElement("button");
const resul = document.getElementById("resultados");

btn.textContent = "Hazme clic";
resul.appendChild(btn);

const btnClic = document.getElementsByTagName("button");

btnClic[0].addEventListener('click', ()=> {
    console.log("¡Funciona!");
})



