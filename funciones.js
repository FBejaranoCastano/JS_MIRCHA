//? Función Declarada

function devolverSaludo(nombre="Desconocido") {
    return `Hola bienvenido: ${nombre}`;
}

console.log(devolverSaludo("Felipe Bejarano"));
console.log(devolverSaludo());

//? Asignar una funcion a una variable => función anonima

const funcionExpresada = function() {
    console.log("Soy una función anonima...")
}
funcionExpresada();

