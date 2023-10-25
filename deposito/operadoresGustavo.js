const leitor = require("readline-sync")
let a = leitor.question("primeiro numero: ")
let b = leitor.question("segundo numero: ")
//1
console.log("o primeiro numero é igual segundo?",a===b)
//2
console.log("o primeiro numero é diferente so segundo?",a!==b);
//3
console.log("o primeiro numero é maior que o segundo?",a>b);
//4
console.log("o primeiro numero é menor que o segundo?",a<b);