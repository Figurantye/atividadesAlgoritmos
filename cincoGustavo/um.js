//1.1. Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma deles.

function soma(a, b){
    return a + b
}

// 1.2. Crie uma função chamada multiplicacao que recebe dois números como parâmetros e retorna o resultado da multiplicação.

function vezes(a, b){
    return a * b
}

// 1.3. Chame ambas as funções com valores de exemplo e exiba os resultados no console.

const leitor = require("readline-sync")

let a = leitor.questionFloat(`insira o primeiro valor: `)
let b = leitor.questionFloat(`insira o segundo valor: `)

console.log(`soma: ${soma(a, b)} \nmultiplicacao: ${vezes(a, b)}`);