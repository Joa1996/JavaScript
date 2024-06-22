//Es muy importante asegurarnos que los bucles finalizen 
let i=0;

for (let a=0; a< 10 ; a++){
    if(a===5){
        break; //En este caso cuando llegue a 5 automaticamente se terminara el bucle, puede servir para evitar un array muy grande
    }
    console.log(a);
}
//Continue Interation, esto tipos de condiciones nos permite omitir cieras condiciones o elementos dentro de un array u objeto
//Supongamos que tenemos un array con los siguentes elementos
let array=[1,2,3,4,5,6,7,8,9,10]
//Queremos recorrer el Array pero omitir el 2 y el 5
for (let x=0 ; x<array.length ; x++){
      if( array[x]==2 || array[x]==5  ){
        continue;
      }
     console.log(array[x]);
}
//De esta manera el bucle se sigue ejecutando pero se evitan los elementos o la condicion que metamos en 
//el if, esto se puede realizar con cualquier bucle