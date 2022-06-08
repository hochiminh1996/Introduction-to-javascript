/*
    CONSTRUTOR DE ARRAY
*/

//forma convencional
let countriesArray = [
    "Brasil", "Rússia", "Índia", "China", "África do Sul"
];

//Construtor de Array
let countriesArray2 = new Array("Brasil", "Rússia", "Índia", "China");


//Percorrendo
countriesArray2.forEach((values,index)=>{
    console.log(`Países : ${values} Index : ${index}`)
})
