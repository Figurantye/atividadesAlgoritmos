const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o primeiro valor: ") 
let op = leitor.question("insira uma das opções: \n +: soma \n -: subtrair \n /: dividir \n *: multiplicar: \n ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

if (v1 < 0) {
    console.log("primeiro numero invalido, digite um positivo")
} else if (v2 < 0) {
    console.log("segundo numero invalido, digite um positivo")
} else if (op === "+") {
    console.log(v1 + v2);
} else if (op === "-") {
    console.log(v1 - v2);
} else if (op ==="/") {
    console.log( v1 / v2);
} else if (op === "*") {
    console.log(v1 * v2);
}