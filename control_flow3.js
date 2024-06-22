//Bucle For
let numbers = [1,2,3,4,5];

let idx=0;
//Para saber el tamaño de un Array podemos usar esta funcion, que nos traera el largo de un Array
// let lenghtOfArray=numbers.length;
// console.log(lenghtOfArray);

//Como en otros lenguajes declaramos una variable que se incrementara en cada recorrida del bucle, en este caso es "idx" y con la opcion idx++ se incrementara, aunque se podria elegir la opcion de decrementar
//En este caso siempre que  la variable idx "idx < numbers.length;" se va a ejecutar el bucle, cuando iguale el tamaño el bucle finaliza
for (let idx=0;idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}
console.log('Ejecucion en Bucle While -------------------');
//Bucles While
let idxs=0;
while (idxs < numbers.length) {
    console.log(numbers[idxs]);
    idxs++;
}
//Ejemplo de ambos Bucles
console.log('Ejemplo de ambos Bucles');
let sum=0;
while (true){
    console.log('Loop');
    sum++;

    if(sum ==10)
        break; //C/break automaticamente podemos romper un bucle
}
console.log('Ejemplo de Bucle Do While');
//Do While, como sabemos este tipo de bucle ejecuta primero una accion y dpues valida si si se esta cumpliendo
//c/esto nos aseguramos al menos una ejecucion
let i=0;
do {
    console.log(i);
    i++;
}while (i<10);

//Iterar en objetos
console.log('Iterar Objetos con bucle FOR');
const course = {
    name:'Javascript for Beginners',
    duration:3,
    section:7
};
//Se declara una constante "key" que iterara sobre todos los elementos de course
for ( const key in course){
    console.log(course[key]);
    console.log(key); // Si lo imprimieramos podriamos ver todos los elementos del objeto
}

//Otras manera de iterar un Array
console.log('Usando un for-of- loop');
let n1= [10,20,30,40,50,60];

for (let element of n1){
    console.log(element);
}

