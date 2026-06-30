//Arrow Function

// Ejemplo 1: Arrow que imprime (no retorna)
const sumar = (a, b) => console.log(a + b); // imprime la suma pero no devuelve el valor

// Ejemplo 2: Arrow con retorno implícito
const sumarRetorno = (a, b) => a + b; // retorna la suma directamente

// Ejemplo 3: Arrow con cuerpo de bloque y return
const sumarConReturn = (a, b) => { // usar cuando necesites varias líneas
    const resultado = a + b;
    return resultado;
};

// Ejemplo 4: Un parámetro sin paréntesis
const cuadrado = x => x * x; // retorno implícito

// Ejemplo 5: Sin parámetros
const obtenerPi = () => 3.14159; // función sin args

// Ejemplo 6: Parámetros por defecto
const potencia = (base, exp = 2) => Math.pow(base, exp); // exp por defecto 2

// Ejemplo 7: Rest parameters
const sumarTodos = (...nums) => nums.reduce((s, n) => s + n, 0); // suma cualquier cantidad de argumentos

// Ejemplo 8: Retornar objeto literal (uso de paréntesis)
const crearUsuario = (nombre, edad) => ({nombre, edad}); // retorna un objeto

// Ejemplo 9: Arrow como callback
const nums = [1, 2, 3];
const dobles = nums.map(n => n * 2); // map con arrow

// Ejemplo 10: Arrow async
const retraso = ms => new Promise(res => setTimeout(res, ms));
const ejemploAsync = async () => {
    await retraso(100);
    return 'hecho';
};


sumar(10, 15);

