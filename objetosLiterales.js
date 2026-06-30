let nombre = "Felipe",
    edad = 34

const persona = {
    nombre: nombre,
    edad: edad,
    saludar: function (){
        console.log(`Hola soy: ${this.nombre}`)
    }
};

console.log(persona);
persona.saludar();

const person = {
    nombre,
    edad,
    saludar(){
        console.log(`Hola soy: ${this.nombre}`)
    }
};

console.log(person);
person.saludar()