/*
    Throw : disparar, lançar
    Catch : capturar, pegar
    Try : pegar
*/
function sayMyName(name){
    if(name===""){
        throw new Error("Nome é necessário");// lançando uma exceção
    }
    console.log(name)
}
try{
    sayMyName("");//tentando executar
}
catch(e){
    console.log("Houve um erro", e);//retorno do erro
}

