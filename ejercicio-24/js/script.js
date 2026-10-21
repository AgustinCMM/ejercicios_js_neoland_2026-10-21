// Ejercicio 24
let numerosText = ["1", "2", "3"];

console.log("Arreglo inicial", numerosText);

let numerosModificados = numerosText.map((item)=>{
    let resultado = item + " - número";
    return resultado;
});

console.log("Nuevo arreglo", numerosModificados);