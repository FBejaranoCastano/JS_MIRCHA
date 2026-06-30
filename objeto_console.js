console.log(console);
console.error("Esto es un error");
console.warn("Esto es una advertencia");


console.groupCollapsed("Este es un grupo");
console.log("Este es un mensaje dentro del grupo");
console.error("Este es un error dentro del grupo");
console.warn("Este es una advertencia dentro del grupo");
console.groupEnd();

console.table(Object.entries(console));

const abecedario = ["a", "b", "c", "d", "e", "f"],
    numeros = [1, 2, 3, 4, 5, 6];
console.table(abecedario);
console.table(numeros);

const persona = {
    nomenombre: "Pipeto",
    apellidos: "Bejarano",
    edad: 34
}
console.table(persona);
console.clear();

console.time("Tiempo de ejecución");
for (let i = 0; i < 100000000; i++) {
    // console.log(i);
}
console.timeEnd("Tiempo de ejecución");

console.clear();

for (let i = 1; i <= 100 ; i++) {
    console.count(`Número de veces que se ha ejecutado el bucle`);
    console.log(i);
}

console.clear();

let x = 3;
let y = 2;
let pruebaXY = "Se espera que X sea menor que Y";
console.assert(x < y, { x, y, pruebaXY });
