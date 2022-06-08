/*
    Recorde de notas por letras
    90-100 = A
     80-89 = B
     70-79 = C
     60-69 = D
     <=60 = F   
*/


//arrow function
const nota = (nota) => {
    let char;

    if(nota>=90 && nota<=100){
        char = "A";
    }else if(nota>=80 && nota<90){
        char = "B";
    }else if(nota>=70 && nota<80){
        char = "C";
    }else if(nota>=60 && nota<70){
        char = "D";
    }else if(nota>=0 && nota<60){
        char = "F";
    }else{
        char = "Inválido"
    }
    return char;
    
}

console.log(`Resultado : ${nota(100)}`);
console.log(`Resultado : ${nota(89)}`);
console.log(`Resultado : ${nota(79)}`);
console.log(`Resultado : ${nota(69)}`);
console.log(`Resultado : ${nota(59)}`);
console.log(`Resultado : ${nota(0)}`);
console.log(`Resultado : ${nota(101)}`);
console.log(`Resultado : ${nota(-1)}`);

