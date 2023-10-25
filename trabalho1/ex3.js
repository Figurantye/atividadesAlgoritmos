const leitor = require("readline-sync")

let v1 = leitor.questionFloat("insira o valor a ser dividido: ") 
let v2 = leitor.questionFloat("insira um divisor que não seja 0: ")

if (v2 !== 0) {
    console.log(v1/v2)
} else {
    console.log("divisor invalido, digite um numero que não seja 0");
}