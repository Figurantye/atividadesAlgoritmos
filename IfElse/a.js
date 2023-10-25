const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ") 
let op = leitor.question("insira uma das opções: \n +: somar \n -: subtrair \n /: dividir \n *: multiplicar")
let v2 = leitor.questionFloat("insira o segundo valor: ")

if (op === "+") {
    console.log(v1 + v2);
} else if (op === "-") {
    console.log(v1 - v2);
} else if (op ==="/") {
    console.log( v1 / v2);
} else if (op === "*") {
    console.log(v1 * v2);
}