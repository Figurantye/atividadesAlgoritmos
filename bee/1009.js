/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/
const leitor = require("readline-sync")

function main(){
    let vendedor = leitor.question("insira o nome do vendedor de macas: ")
    let salFixo = leitor.questionFloat(`insira o salario fixo de ${vendedor}: `)
    salFixo.toFixed(2)
    let vendas = leitor.questionInt(`quantas macas ${vendedor} vende por mes? `)
    let por = leitor.questionFloat(`qual é a porcentagem de ${vendedor} nas vendas? `)
    let maca = 1.75
    let burgues = vendas * maca
    let porcent = por/100*burgues
    let assalariadoFinal = salFixo + porcent
    let burguesFinal = burgues - assalariadoFinal
    burguesFinal.toFixed(2)
    console.log(`o trabalhador assalariado explorado ${vendedor} que se matou trabalhando no sol recebeu somente ${assalariadoFinal} e vai ter que sobreviver com isso durante 1 mes enquanto aquele porco filho da puta do patrao dele recebeu ${burguesFinal*30} HAHAHAHAHAHHAA COMO O MUNDO É JUSTO`);
     
}
main()