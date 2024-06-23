let num1=14;
let num2=10;

const isNum1Greater= num1 < num2;
console.log(isNum1Greater);

//comparar dos numeros
let n1=2;
let n2='2';

console.log(n1==n2); //la principal diferencia entre uno y el otro es que en uno (==) hace una comparacion menos estricta
console.log(n1===n2);//en el otro hace una comparacion mas estricta, teniendo en cuenta inclusive el tipo de datos, en este caso devolveria falso porque uno es int y el otro es string
//Uso del if
let price = 1.99;
let amountCash=10;

if (amountCash >= price)
    {
        console.log("Compra Aceptada");
    }
else {
    console.log("Compra Cancelada");
}
//si en el codigo no hay otro if podemos evitar el uso de {}
// if (amountCash >= price)
//         console.log("Compra Aceptada");
    
// else 
//     console.log("Compra Cancelada");
//Otro ejemplo de if dentro de otro if
let hour =10;

if (hour >= 6 && hour<=12 ){
    console.log("Servir Almuerzo");
}
else if (hour > 12  && hour<=14 ){
    console.log("Servir Almuerzo");
}
else { //Si no se cumplen las condiciones anteriores entonces se ejecutar esta 
    console.log("No servir almuerzo");
}
//En Javascript no es necesario el uso de la parte else