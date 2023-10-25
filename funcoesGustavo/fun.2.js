const leitor = require("readline-sync")

let nome = leitor.question("insira seu nome: ")
let idade = leitor.questionInt("insira sua idade: ")
let endereço = leitor.question("insira sua endereço: ")
let profissão = leitor.question("insira sua profissão: ")

function info(){
    return `eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`
    
}

let informações = info()
console.log(informações);
