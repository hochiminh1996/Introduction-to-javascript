/*
    CASAS DECIMAIS E TROCA DE SEPARADOR

    toFixed : definição de casas decimais
    replace : substituição de "A" por "B"

    Observe que, ao utilizar o replace em dados do tipo number, ele transforma a variável em String.
*/

let number = 1234.9234;

console.log(number.toFixed(2).replace(".",","))


