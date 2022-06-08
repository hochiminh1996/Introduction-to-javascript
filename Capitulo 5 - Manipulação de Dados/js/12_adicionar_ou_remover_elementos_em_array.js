/*
    Um array é uma estrutura de dados que armazena uma série de informações dos mais variados tipos. Nele podemos adicionar elementos ou remover


    push(valor) : adjciona elementos no fim do array
    pop() : remove elementos do fim do array
    unshift(valor) : adiciona elementos no inicio do array
    shift(valor) : remove o primeiro elemento do array 

    indexOf(valor) : retorna a posição de um elemento dentro do array. Se não encontrar, retorna -1
*/

let techs = [
    "html",
    "css",
    "js",
];

techs.push("NodeJs");//adiciona ao final
console.log(techs)

techs.unshift("SQL");//adiciona no inicio do array
console.log(techs)

techs.pop();//remove o último elemento
console.log(techs)

techs.shift();//remove o primeiro elemento
console.log(techs);

console.log(techs.splice(1,1));//Remove elementos entre um intervalo(inicio, fim). Por exemplo, neste caso, será removido o primeiro elemento(css)
console.log(techs);


console.log(techs.indexOf("js"));//retorna a posição de um elemento dentro de um array




