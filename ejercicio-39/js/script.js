// Ejercicio 39
const precios = ["10", "20", "30"];

const preciosConFormato = precios.map((precio) => {
    return `$${precio} USD`;
});

console.log(preciosConFormato);