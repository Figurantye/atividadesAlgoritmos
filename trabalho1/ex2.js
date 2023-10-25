const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ") 
let op = leitor.question("insira uma das opções: \n +: soma \n -: subtrair \n /: dividir \n *: multiplicar: \n ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

if (((v1 || v2)%2)!==0) {
    console.log("digite um numero par")
} else if (op === "+") {
    console.log(v1 + v2);
} else if (op === "-") {
    console.log(v1 - v2);
} else if (op ==="/") {
    console.log( v1 / v2);
} else if (op === "*") {
    console.log(v1 * v2);
}