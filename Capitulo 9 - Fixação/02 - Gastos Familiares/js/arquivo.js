// ALGORITMO BÁSICO DE RENDA FAMILIAR 
const family = {
    receitas : [],//arrays de receits
    despesas : [],//arrays de despesas
    

    //adicionar valor no array
    adicionarReceitas(valor){
        this.receitas.push(valor);
        return "Receita Adicionada ";
    },

    //calcula os valores adicionados no array receitas
    calcularReceitas(){
        let totalReceitas=0;
        for(let i=0;i<this.receitas.length;i++){
            totalReceitas+=this.receitas[i];
        }
        // console.log(`Total Receitas : ${totalReceitas}`)
        return totalReceitas;
    },
    
    //adicionar despesas no array despesas    
    adicionarDespesas(valor){
        this.despesas.push(valor);
        return "Despesa Adicionada ";

    },

    //calcular todos os valores adicionados no array despesas
    calcularDespesas(){
        let totalDespesas=0;

        //USAMOS O FOR OF PARA PERCORRER UM ARRAY
        for(let value of this.despesas){
            totalDespesas+=value;
        }

        // for(let i=0;i<this.despesas.length;i++){
        //     totalDespesas+=this.despesas[i];
        // }
        // console.log(`Total Despesas : ${totalDespesas}`)
        return totalDespesas;
    },

    //exibe todos os valores do array despesas
    exibirReceitas(){
        for(let value of this.receitas){
            console.log(value);
        }
        return true;
    },

    //exibe todos os valores do array despesas
    exibirDespesas(){

        //USAMOS O FOR OF PARA PERCORRER ARRAYS. É + INTERESSANTE
        for(let value of this.despesas){
            console.log(value);
        }

        // for(let i=0;i<this.despesas.length;i++){
        //     console.log(this.despesas[i]);
        // }
        return true;
    },

    //efetua o calculo do gasto familiar
    gastoFamiliar(){
        let gasto = this.calcularReceitas()-this.calcularDespesas();
        //armazena a subtração entre receitas e despesas

        if(gasto<0){
            return `Gasto total familiar (DÉFICIT) : ${gasto.toFixed(2)}`
        }if(gasto>0){
            return `Gasto total familiar (SUPERÁVIT) : ${gasto.toFixed(2)}`
        }else if(gasto==0){
            return `Gasto total familiar : ${gasto.toFixed(2)}`
        }        
    }
}   



family.adicionarReceitas(2200)
family.adicionarReceitas(3200)
family.adicionarReceitas(250.43)
family.adicionarReceitas(360.45)

family.adicionarDespesas(320.34);
family.adicionarDespesas(128.45);
family.adicionarDespesas(176.87);
family.adicionarDespesas(1450.00);
family.adicionarDespesas(2000.00);


console.log(family.gastoFamiliar());


// console.log(family.exibirDespesas())
// console.log(family.exibirReceitas())

