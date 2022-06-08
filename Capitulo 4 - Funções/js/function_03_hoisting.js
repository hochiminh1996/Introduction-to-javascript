/*
    Função : em programação, é uma subrotina utilizada para executar uma tarefa dentro de um bloco de códigos. 

    *Agrupamento de código e reutilização

    hoisting é a "elevação" dos valores de uma variável ou função. Geralmente ocorre quando chamamos uma variável antes de declara-lá.

    console.log("Olá "+nome);

    var nome = "Felippe";

    Ocorre a elevação e a chamada funciona normalmente. É como se o JS interpreta-se desse forma : 
    var nome = "Felippe";
    console.log("Olá ", nome)

    *OBS : A elevação, ou hoinsting, só ocorre se for utilizado a declaração padrão de função, usando a palavra function.

    Se for utilizada outra forma de escrita, a elevação não ocorrerá, ocasionando um erro de referência, pois a ordem de chamada importará.
    Exemplo que NAO OCORRERÁ elevação.

    console.log(teste()); 

    const teste = () =>{
        console.log("a")
    }
    ocorrerá um erro de referência. A ORDEM IRÁ IMPORTAR NESSE CASO.

*/

sayMyName();
function sayMyName(){
    console.log("Felippe M");
    // Ocorrendo o hoinsting de função.
}