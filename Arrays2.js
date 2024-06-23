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

const employee =employees.find(function(e) {
    return e.name === 'Marcos'
});
console.log(employee);