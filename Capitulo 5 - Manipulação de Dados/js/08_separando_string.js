/*
    SEPARANDO STRINGS.

    Separar um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois, transformar o array em um texto e onde era espaço colocar um _

    split : uma função de separador e retorna um array 
    join : Funciona em array. Você usa o array.join("_") e ele irá adicionar um _ como separador de cada elemento
*/

let phrase = "Um espectro ronda a europa: O espectro do comunismo";

let array = phrase.split(" ");//Separa por espaço e retorna um array

let newPhrase = array.join("_");//Adiciona um _ após cada elemento dentro do array

console.log(newPhrase)

