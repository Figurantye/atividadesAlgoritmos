/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

const leitor = require("readline-sync")

function main(){
    let A = leitor.questionInt("insira o valor A: ")
    let B = leitor.questionInt("insira o valor B: ")
    let C = leitor.questionInt("insira o valor C: ")
    let D = leitor.questionInt("insira o valor C: ")

    diferenca = (A * B - C * D)
    console.log(diferenca);
}
main()