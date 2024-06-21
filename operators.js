//Tenemos alternativas a bucles if, ellos son Ternary Operators
let age = 30;
const validacion = age >= 30 ? 'cumple' : 'no_cumple'; //En este caso si la variable edad es mayor a 30 entonces es un 'cumple', sino un 'no cumple'
console.log(validacion);
//C/esto evitamos crear una estructura if , ahorramos lineas de codigo

//Otros Operadores
/*
Operadores lógicos:

|| (OR lógico): Devuelve true si al menos uno de los operandos es true.
&& (AND lógico): Devuelve true si ambos operandos son true.
! (NOT lógico): Invierte el valor booleano de su operando.


Operadores de comparación:

== (igualdad): Compara si dos valores son iguales (con coerción de tipos).
=== (igualdad estricta): Compara si dos valores son iguales sin coerción de tipos.
!= (desigualdad): Compara si dos valores son diferentes (con coerción de tipos).
!== (desigualdad estricta): Compara si dos valores son diferentes sin coerción de tipos.
> (mayor que), < (menor que)
>= (mayor o igual que), <= (menor o igual que)
*/
//la primera validacio o la segunda validacion
console.log(2==3||2==2);
//Simbol Negacoin
let tt=true
console.log(!tt)
//Definir valor por defecto en caso de nulo
let b=null;
const result = b ?? false; //En caso de que sea nulo usa por defecto el valor de 12
console.log(result)
/*
javascript siempre considera a los valores true como prioritarios, por ende debemos tener en cuenta esto en un 
comparador logico
*/