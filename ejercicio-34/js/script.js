// Ejercicio 34
const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");
const p = document.createElement("p");
const resul = document.getElementById("resultados");


btn.addEventListener('click', ()=> {
    let contrasena = entrada.value;
    p.textContent = "";
    if (contrasena.length < 4) {
        p.textContent = "Contraseña muy corta";
    }
    console.log("Caracteres de contraseña:", contrasena.length);
    resul.appendChild(p);
})