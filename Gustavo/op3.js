//2. Faça um programa que:
//a) Peça ao usuário que insira um número par
//b) Imprima na console o resto da divisão desse número por 2.
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const leitor = require("readline-sync")

let a = leitor.questionInt("digite um numero par: ")

console.log(a%2);
//os restos dos numeros pares dividos por 2 sempre vão resultar em 0, e os numeros impares vão dar numeros diferentes de 0