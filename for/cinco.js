/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário usando um loop "for".*/
const leitor = require("readline-sync")

let num = leitor.questionInt("insira um numero para descobrir seu fatorial: ")
let fat = 1;

for(let i = num; i >= 1; i--){
    fat *= i;
}

console.log(`o fatorial de ${num} é ${fat}`)