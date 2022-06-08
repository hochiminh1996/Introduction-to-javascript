/*
    Função : em programação, é uma subrotina utilizada para executar uma tarefa dentro de um bloco de códigos. 

    *Agrupamento de código e reutilização

    Call back => chamar de volta

    É um função que é passada para outra função.


*/

//função inicial
function sayMyName(name){
   console.log("Antes da CallBack") 
   name(); //chamando a função. Igualzinho como se fosse um parâmetro. A única diferença é que usamos os parênteses ()
   console.log("Após CallBack") 

}


sayMyName(()=>{
    console.log("Passando uma função para outra função");
})





