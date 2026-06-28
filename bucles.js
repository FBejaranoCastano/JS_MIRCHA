//* Ciclo FOR

let tabla = 8;

for (let i = 1; i <= 10; ++i) {
    console.log(`${tabla} * ${i} = ${tabla * i}`);
}

//* Ciclo WHILE

console.log()
let contador = 1;

while (contador <= 10) {
    console.log(`${tabla} * ${contador} = ${tabla * contador}`);
    contador++;
}

//! Ejemplo con Do While

let numero = 10;

do {
    console.log(numero);
} while (numero < 5);

//! Ejemplo Practico Do While

/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => {
        rl.question(texto, resolve);
    });
}

async function main() {
    let opcion;

    do {
        opcion = Number(await preguntar("Ingresa una opción (1-3): "));

        if (opcion < 1 || opcion > 3) {
            console.log("Opción inválida");
        }

    } while (opcion < 1 || opcion > 3);

    console.log(`Elegiste la opción ${opcion}`);
    rl.close();
}

main();*/

//! RECORRER ARRAY Y OBJETOS

let arreglo = [1,2,3,4,5,6,7,8,9];

for (const [index, number] of arreglo.entries()) {
    console.log(`Índice: ${index + 1}, Valor: ${number}`);
}


let objeto = {
    nombre: "Felipe",
    apellido: "Bejarano",
    edad: 34
}

for (const objetoKey in objeto) {
    console.log(`Clave: ${objetoKey}, Valor: ${objeto[objetoKey]}`);
}



