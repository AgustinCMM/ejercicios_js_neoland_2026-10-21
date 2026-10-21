// Ejercicio 26
let lista = [1,2,3,4,5,6,7,8,9,10];

console.log("Lista inicial:", lista);

let i = lista.length;
while (i > 0) {
    lista.pop();
    console.log(lista);
    i--;
}