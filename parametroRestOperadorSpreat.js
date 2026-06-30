
//! PARAMETRO REST
function suma(a, b, ...args) {
    let total = 0, acumulado = 0;
    args.forEach((arg) => {
        acumulado += arg;
    });

    return total = a + b + acumulado;
}

console.log(suma(2, 3, 4, 5, 20));

//! OPERADOR SPREAD

const array1 = [1, 2, 3],
    array2 = [4,5,6];

const array3 = [...array1, ...array2];
console.log(array3);