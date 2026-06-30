
//! CREAMOS UNA FUNCION CONTRUCTORA

function Animal(nombre, genero){
    //* Atributos
    this.nombre = nombre;
    this.genero = genero;

    //* Netodos
    
    /*this.sonido = function () {
        console.log(`Hola, soy ${this.nombre} y hago un sonido`);
    }*/
}

//!AGREGAR METODO AL PROTOTIPO DE LA FUNCIÓN CONSTRUCTORA ANIMAL
Animal.prototype.sonido = function () {
    console.log(`Hola, soy ${this.nombre} y hago un sonido`);
}

//?HERENCIA PROTOTIPICA

function Perro(nombre, genero, tamanho){
    this.super = Animal; //* Guardamos la referencia del constructor padre
    this.super(nombre, genero); //* Llamamos al constructor padre
    this.tamanho = tamanho;

}
//!HERENCIA DEL PROTOTIPO DE ANIMAL
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//! SOBREESCRITURA DE METODOS
Perro.prototype.sonido = function () {
    console.log(`Hola, soy ${this.nombre}, hago guau guau y soy de tamaño ${this.tamanho}`);
}

Perro.prototype.saltar = function () {
    console.log(`Hola, soy ${this.nombre} y estoy saltando`);
}


const bruno = new Perro("Bruno", "Macho", "mediano");
bruno.sonido();
bruno.saltar();
const lola = new Animal("Lola", "Hembra");
lola.sonido();
