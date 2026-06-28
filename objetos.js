
const alumnos = {
    nombre: "John",
    apellido: "Bejarano",
    edad: 33,
    pasatiempos: ["Correr","Jugar play"],
    contacto: {
        mail: "pipebejarano@gmail.com",
        movil: 3206817064
    },
    saludar: function (){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }
}
console.log(alumnos);
console.log(alumnos.nombre);
console.log(alumnos.pasatiempos[0]);
console.log(alumnos.contacto.mail);
console.log(alumnos.saludar());
console.log(alumnos.hasOwnProperty("nombre"))//! saber si una propiedad esta en un objeto
console.log(alumnos.hasOwnProperty("apellido"))

//?Obtener las llaves de un objeto y sus valores
console.log(Object.keys(alumnos));
console.log(Object.values(alumnos));
console.log(Object.entries(alumnos));

//? Recorrer un objeto

Object.entries(alumnos).forEach(([key, value]) => {
    console.log(key, value);
});