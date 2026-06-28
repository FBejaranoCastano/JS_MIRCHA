const a = [1,2,3,4,5,6];
console.log(a)

//? Otra forma de inicializar un arreglo

const b = Array.of(1,2,3,4,5,6,"Felipe");
console.log(b)

//? Llenar arreglo con un dato constante

const c = Array(100).fill(false);
console.log(c)


const colores = ["red","green","blue"];
console.log(colores)
colores.push("Negro");
console.log(colores);

colores.forEach((color, index) => console.log(`<li id="${index}">${color}</li>`));