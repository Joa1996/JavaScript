// function sayHi() {
//     console.log('Hi');
// }
//FUnciones c/ Parametros
function sayHi(name){
    console.log('Hi:'+name)
}

//llamar a la funcion en cuestion
//sayHi();
sayHi('Joaquin');
//Tipos de funciones o metodos, tenemos funcioens que devuelven un valor con un "return" en el final y funciones
//sin return, en este ultimo caso si no definimos un return, por defecto Javascript no devolvera nada
function multiply(num1,num2) {
    return num1*num2;
}

console.log(multiply(2,2));

function operatorNumber(num1,num2){
    var suma = num1+num2;
    var divide = num1/num2;
  return suma
}
console.log(operatorNumber(2,2));