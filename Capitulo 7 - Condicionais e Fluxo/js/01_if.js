/*
    Condicional SE (IF) senão (else)

    if(true){
        execute
    }else (false){
        execute
    }
*/

let temperatura = 10;

if(temperatura>=36.5){
    console.log("Febre")
}else if(temperatura >=20 && temperatura<36.5){
    console.log("Estável")
}else{
    console.log("Saudável")
}

//Uso da condicional : ternário
console.log(temperatura>=36.5 ? "Febre" : "Estável");

