let numeros = [1,2,3];

//! Sin destructuración

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]
console.log(uno, dos, tres)

//? Con destructuración

const [one, two, three] = numeros;

console.log(one, two, three);

//* Ahora con Objetos

const persona = {
    nombre: 'Jose',
    apellido: 'Bejarano',
    edad: 34

};

let {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad)