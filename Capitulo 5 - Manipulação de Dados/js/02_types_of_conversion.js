/*
    TYPE CONVERSION(TYPECAST) X TYPE COERSION
    Basicamente, é a conversão do tipo de dado.

    Type Conversion : nós realizamos essa conversão ao definir o tipo de dado.

    Type Coersion : nós não realizamos a conversão e o próprio JS define o tipo de dado.
*/

console.log("9"+5); //TYPE COERSION : O JS transformou o 5 em string e concatenou os valores : 95

console.log(Number("9")+5);//TYPE CONVERSION : Pois definimos o tipo de dado ao "encapsular" dentro de um tipo number


console.log("2"+2-2);//TYPE COERSION : concatenou "22"-O + é usado na adição e concatenação- e depois subtraiu 2.

