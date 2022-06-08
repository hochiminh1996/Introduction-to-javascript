/*
    Operadores lógico : AND (&&) / OR (||) NOT (!)

    AND : Ambas as expressões precisam ser verdadeiras
    OR  : Apenas uma expressão precisa ser verdadeira.
    !   : Nega a expressão e muda seu valor booleano
    
    A = true
    B = false

    !A = RETORNA FALSE
    !B = RETORNA TRUE

*/ 
let bread = true;
let cheese = true;

console.log(bread && cheese);//true : ambos precisam ser verdadeiros
bread = false;//modicando

console.log(bread && cheese);//false 

console.log(bread || cheese);// true : apenas um precisa ser verdade

console.log(!bread);//retorna true
console.log(!cheese);//retorna false