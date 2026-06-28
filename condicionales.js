let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres niño");
}

//? Operador ternario

let numero = 18

let mensaje = numero >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

let nota = 59;

let resultado =
    nota >= 90 ? "Excelente" :
        nota >= 80 ? "Bueno" :
            nota >= 60 ? "Aprobado" :
                "Reprobado";

console.log(resultado);

//! Ejemplo con Switch

let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Día no válido");
}

//! Switch con varios casos aninados

let mes = 12;

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;

    default:
        console.log("Otra estación");
}

