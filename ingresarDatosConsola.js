const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cómo te llamas? ", (nombre) => {
    console.log(`Hola ${nombre}`);
    rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirOpcion() {
    rl.question("Elige una opción (1-3): ", (respuesta) => {
        const opcion = Number(respuesta);

        if (opcion >= 1 && opcion <= 3) {
            console.log(`Elegiste la opción ${opcion}`);
            rl.close();
        } else {
            console.log("Opción inválida. Intenta nuevamente.");
            pedirOpcion(); // volver a preguntar
        }
    });
}

pedirOpcion();