/*
 c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/

const leitor = require("readline-sync")

let num = leitor.questionInt("insira um numero: ")

function parOuImpar(num){
    if((num%2)===0){
        return `o numero é par`
    } else {
        return `o numero é impar`
    }
}

imparOuPar = parOuImpar(num)
console.log(imparOuPar);