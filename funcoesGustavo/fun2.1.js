/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/
const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

function soma(v1, v2){
    return v1 + v2
}

adição = soma(v1, v2)
console.log(adição);