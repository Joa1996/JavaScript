const employees = [
    {
        id:1,
        name:'Pedro'
    },
    {
        id:2,
        name:'Marcos'
    },
    {
        id:3,
        name:'Maria'
    }
];
//Esta funcion buscara todos los elementos del objeto
const employee =employees.find(function(e) {
    return e.name === 'Marcos'//Dentor del metodo find(), usamos otra funcion que es del tipo callback y lo que hara sera por cada objeto ejecutar una busqueda
});

function search(e) {
    console.log(e);
    return e.name === 'Marcos'//Dentor del metodo find(), usamos otra funcion que es del tipo callback y lo que hara sera por cada objeto ejecutar una busqueda
    
}
search(employees);
console.log(employee);