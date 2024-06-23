const numbers =[5,4,3,2,1];
 
numbers.push(10);//Agregar elementos al final del Array
numbers.push(20,30,800); //Agregar varios elementos al final del array
numbers.unshift(233,330);//Agregar elementos al principio del array
numbers.splice(1,0,'Hola Carolas') //Agregar elementos en ciertas posiciones del array, en este caso seria en la posicion 1 del array
                                    //Ademas eliminamos al poner 0 quiere decir que el elemento que estaba en esa posicion se dezplaze
console.log(numbers);

console.log('---------------------------------------');
const indexOfThree = numbers.indexOf(3); //Definir la posicion indice de un array
console.log(indexOfThree);