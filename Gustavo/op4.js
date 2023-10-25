//3)Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas

const leitor = require("readline-sync")

let a = leitor.questionInt("qual a sua idade? ")

console.log("sua idade em meses:",a*12);
console.log("sua idade em dias",a*365);
console.log("sua idade em horas",24*365*a);