/*
    PERCORRE DADOS DE UM VARIÁVEL OU ARRAYS DEFINIDOS ANTERIOREMENTE 
 */

let name = "Felippe";

let names = ['João', 'Pedro','Paulo']

for(let vet of names){
    // Irá percorrer todos os valores do array names e armazenará no vet
    console.log(vet)
}
for(let char of name){
    // Irá percorrer todos os char da String e armazenará em char
    console.log(char)
}