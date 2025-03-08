//Práctica de comparación de números


//solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
//Solicitando el primer número
let numero1 = prompt("Ingrese el primer número"); //Deja que numero 1 sea un prompt donde solicito ingresar un número
numero1 = Number(numero1); //numero 1 va a guardar el valor que arrojo el usuario

let numero2 = prompt("Ingrese el segundo número");
numero2 = Number(numero2);

let numero3 = prompt("Ingrese el tercer número");
numero3 = Number(numero3);

console.log(numero1); //Imprimiendo el valor del numero 1
console.log(numero2); //Imprimiendo el valor del numero 2
console.log(numero3); //Imprimiendo el valor del numero 3

//Analizar los numeros e identificar el mayor, el den centro y menor
let numeros = [numero1, numero2, numero3]; //Array para gaurdar en un mismo lugar los valores de los 3 numeros

//Ordenando los números
numeros.sort(function(a,b) { //numeros sort() --> metodo para odenar el arreglo (sort()). Function (a,b) es la que compara los elementos (a,b)
    return a-b; //Aquí se determina como se ordenan los elementos (b-a de mayor a menor)
});

console.log(numeros); //imprimiendo el resultado de mayor a menor

// Ordenando los números de mayor a menor
numeros.sort(function(a, b) {
    return b - a; // orden de los elementos (b-a de mayor a menor)
});

console.log(numeros); // Imprimiendo el resultado de menor a mayor