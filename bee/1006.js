<<<<<<< HEAD
/*Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".*/

const leitor = require("readline-sync")

function main(){
    notaA = leitor.questionFloat("Insira a primeira nota: ");
    notaA.toFixed(1)
    notaB = leitor.questionFloat("Insira a segunda nota: ");
    notaB.toFixed(1)
    notaC = leitor.questionFloat("Insira a terceira nota: ");
    notaC.toFixed(1)

    let soma = notaA + notaB + notaC
    let media = soma / 3
    console.log(media);
}
=======
/*Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".*/

const leitor = require("readline-sync")

function main(){
    notaA = leitor.questionFloat("Insira a primeira nota: ");
    notaA.toFixed(1)
    notaB = leitor.questionFloat("Insira a segunda nota: ");
    notaB.toFixed(1)
    notaC = leitor.questionFloat("Insira a terceira nota: ");
    notaC.toFixed(1)

    let soma = notaA + notaB + notaC
    let media = soma / 3
    console.log(media);
}
>>>>>>> e44d2536eb32531cc18e813d7827dbcb571a3743
main()