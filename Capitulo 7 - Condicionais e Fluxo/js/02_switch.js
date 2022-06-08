/*
    Condicional : switch (escolha)
*/



function calculator(valorA, valorB, operacao){
    let calc = 0;
    switch(operacao){
        case "+": calc = valorA + valorB;
        break;

        case "-": calc = valorA - valorB;
        break;

        case "*": calc = valorA * valorB;
        break;

        case "/": calc = valorA / valorB;
        break;

        default : console.log("Operação inválida");
    }
    console.log(calc);
}


calculator(10, 20, "");