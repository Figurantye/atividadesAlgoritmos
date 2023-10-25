/* 
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
*/
const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

function comp(v1, v2){
    if(v1 > v2){
        return `${v1} é maior que ${v2}`
    } else {
        return `${v2} é maior que ${v1}`
    }
}   
let comparação = comp(v1, v2)
console.log(comparação);