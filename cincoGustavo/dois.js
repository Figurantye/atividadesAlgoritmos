// 2.1. Crie uma função chamada inverterString que recebe uma string como parâmetro e retorna a string invertida.
function inverterString(a){
    let aSplit = a.split("")
    let aReverse = aSplit.reverse()
    let aJoin = aReverse.join("")
    
    return aJoin
}

// 2.2. Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais na string.
function contarVogais(a){
    let converter = a.split("")
    let vogaisArray = ["a", "e", "i", "o", "u"]
    let vogais = converter.filter((converter) => vogaisArray.includes(converter))
    
    return vogais.length
}

// 2.3. Chame ambas as funções com strings de exemplo e exiba os resultados no console.
const leitor = require("readline-sync")
let a = leitor.question("insira uma string: ")

console.log(`inverter: ${inverterString(a)} \nnumero de vogais: ${contarVogais(a)}`);