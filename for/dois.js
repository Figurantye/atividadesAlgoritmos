/*Crie um programa que gere a tabela de multiplicação de um número específico fornecido pelo usuário, indo de 1 a 10*/

const leitor = require("readline-sync")

let num = leitor.questionInt("insira um multiplicador: ")

for (i = 1; i < 11; i++){
    console.log(i);
    console.log(`multiplicado pelo usuario: ${num*i}`);
}