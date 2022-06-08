/*
    FOR IN : Irá percorrer propriedades de um objeto e seus valores

*/

const person = {
    name : "Felippe",
    age : 25,
    weight : 69
}

for(let property in person){
    console.log(property)//retorna o nome dos atributos
    console.log(person[property]);
    //Basicamente, person[property] retorna o valor de cada atributo com base no seu "index", que no for in é o nome do atributo[property].
}

