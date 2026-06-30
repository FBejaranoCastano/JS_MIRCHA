//* CREAMOS LA CLASE ANIMAL

class Animal {
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    sonido() {
        console.log(`Hola, soy ${this.nombre} y hago un sonido`);
    }
}

class Perro extends Animal {
    constructor(nombre, sexo, raza) {
        super(nombre, sexo);
        this.raza = raza;
        this.tamanho = null;
    }

    sonido() {
        console.log(`Hola, soy ${this.nombre}, un ${this.raza} y hago guau guau`);
    }

    //! Metodo estatico - son metodos que se pueden usar sin instanciar un objeto
    static descripcion(){
        console.log(`Los perros son animales domésticos que pertenecen a la familia de los cánidos. Son conocidos por su lealtad y compañía hacia los seres humanos. Existen muchas razas de perros, cada una con características físicas y temperamentos distintos. Los perros son animales sociales y requieren atención, ejercicio y cuidado para mantener su bienestar físico y emocional.`);
    }

    //! GETTERS Y SETTERS
    get getTamanho() {
        return this.tamanho;
    }

    set setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
}


const corroncho = new Animal("Corroncho", "Macho"),
    lola = new Animal("Lola", "Hembra"),
    firulais = new Perro("Firulais", "Macho", "Labrador");
corroncho.sonido();
lola.sonido();
firulais.sonido();
Perro.descripcion();
firulais.setTamanho = "Mediano";
console.log(firulais.getTamanho);
