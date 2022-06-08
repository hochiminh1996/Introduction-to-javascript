


const conversion = (valor) =>{
    const celsius = valor.toUpperCase().includes("C");//busca a letra C(Celsius)
    const fahrenheit = valor.toUpperCase().includes("F");//busca a letra F

    let removeString;
    let formula = 0;

    if(!celsius && !fahrenheit){// se C e F for falso, ou seja, n encontrado ele lança umm erro
        throw new Error("Expressão incorreta")
    }else  if(celsius){//Se localizar o C
        removeString = Number(valor.replace("C", ""));//REMOVE O C
        formula = removeString*9/5+32;
        //formula para converter celcius em F
        return `${removeString}C => ${formula}F`

    }else if(fahrenheit){//Se localizar o F
        removeString = Number(valor.replace("F", ""));//REMOVE F
        formula = (removeString-32) *5/9;
        //formula para converter Fah em Celsius

        return `${removeString}F => ${formula}C`
    }

    return `${fahrenheit} ${celsius}`;


}
try{
    console.log(conversion("10C"));
    console.log(conversion("50F"));

}catch(err){
    console.log(err.message);
}
