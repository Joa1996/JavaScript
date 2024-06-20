//Declaracion de Variables, al igual que python no es necesario declarar el tipo de variable o sea si es String, int, etc.
// Por buena practica se suele usar una combinacion de minuculas y mayusculas para la declaracion de las variables
var firstName = 'Steven';
//Otra manera ( C7la ultima version) de declarar variables es con "let"
let secondName='David';
//se pueden declarar variables y posteriormente usarlas
let Age;
Age = 23;
//Declarar varias variables en na misma linea 
let v1=12 ,  v2=56;
//Declarar Constantes, al igual que otros lenguajes de programacion, acá tambien podemos declarar constantes, por ejemplo
const  SURNAME = 'Valentini';
console.log(SURNAME);
// Al usar constante se las suele nombrar todo en Mayuscula para marcar que son constantes ( es una buena practica)
/*
Los datos que usamos en js pueden pertenecer a dos tipos de categorias ( al igual que otros lenguajes de programacion), "Datos Primitivos": Datos simples y unicos
como por ejemplo Strings, int, etc. Por otro lado los "Datos No Primitivos": Son aquellos datos mas complejos o de estructura no comunes
como por ejemplo Objetos, Arrays, etc. 
*/
//Al momento de declarar variables de tipo String podemos usar '', "", 
//Por ejemplo para la declaracion de objetos seria de la siguiente manera:
let course = {
    name:'JavaScript',
    hours:3
};
console.log(course.name);
//Arrays
let productColors = ['blue','orange'];
console.log(productColors) //acceder a todos los elemenotos del array
console.log(productColors[1]); //acceder solo a ciertos elementos del array
// Al igual que en python los array pueden ser heterogeneos, por ende aceptan cualquier tipo de elementos en un solo array (int, string, etc.)
//let exampleArray =['blue',24,Date()];
//console.log(exampleArray);
