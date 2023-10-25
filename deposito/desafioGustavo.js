const leitor = require("readline-sync");
let a = leitor.questionInt("numero 1: ")
let b = leitor.question("numero 2: ")
let x = a*b
let y = a/b
console.log("o valor de x é",x)
console.log("o valor de y é",y)