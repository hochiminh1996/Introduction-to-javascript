/*
    Ternário : uma condição inxuta 

    Se mês for igual a 12, troca. Senão, mantém.

    Condiação ? resultado 1 : resultado 2
    Ternário é muito usado nos conceitos de programação funcional
*/
let month = 11;
let trocar_foto = month==12 ? "troca foto" : "mantém foto";

console.log(trocar_foto)

let age = 16;
let acesso = age >=18 ? "Acesso liberado" : "Acesso negado";

console.log(acesso)

let bread = true;
let cheese = false;

let breakfast = bread && cheese ? "Ótimo café" : "Café razoável";

console.log(breakfast)

breakfast = bread && !cheese ? "Ótimo café" : "Café razoável";
console.log(breakfast)


