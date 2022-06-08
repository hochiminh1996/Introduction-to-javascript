/*
    CONTANTO PALAVRAS 

    A propriedade length só funciona para string. Para contar número, ou digitos, temos que converter para string
*/
let word = "Paralepipedo";
let num = 123;

console.log("Quantidade de letras: "+word.length);
console.log("Quantidade de digitos: "+String(num).length);//digitos
