try {
    noExiste;
    console.log(`En el try se agrega el codigo que se va a evaluar`);
}catch (e) {
    console.log(`El catch captura cualquier error surgido en el try`);
    console.log(e);
}finally {
    console.log(`Finally - Se ejecuta siempre al final de un bloque try-catch`);
}


try {
    let numero = "a";
    if (isNaN(numero)) {
        throw new Error(`El caracter introducido no es un número ${numero}`);
    }
    console.log(numero * numero)
}catch (e) {
    console.log(`Se produjo el siguiente error: ${e}`)

}