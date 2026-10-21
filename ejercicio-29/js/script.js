// Ejercicio 29
const frutas = ["manzana", "pera", "banana", "uva", "kiwi"];

frutas.forEach((item, index)=> {
    if (index == 2) {
        console.log("Fruta:", item, "¡Esta es mi fruta favorita!");
    } else {
        console.log("Fruta:", item);
    }
})