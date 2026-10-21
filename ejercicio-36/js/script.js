// Ejercicio 36
const tareas = ["Lavar", "Barrer", "Cocinar"];
const resul = document.getElementById("resultados");

tareas.forEach((item, index)=> {
const p = document.createElement("p");
    p.textContent = "Tarea "+(index+1)+": "+item;
    resul.appendChild(p);
});