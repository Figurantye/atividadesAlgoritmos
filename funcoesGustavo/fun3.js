/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inseridos pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/
const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

function adição(v1, v2){
    return v1 + v2
}

function subtração(v1, v2){
    return v1 - v2
}

function multiplicação(v1, v2){
    return v1 * v2
}

function divisão(v1, v2){
    return v1 / v2
}

let mais = adição(v1, v2)
let diferença = subtração(v1, v2)
let vezes = multiplicação(v1, v2)
let div = divisão(v1, v2)

console.log(`soma: ${mais}\ndiferença: ${diferença}\nmultiplicação: ${vezes}\ndivisão: ${div}`);