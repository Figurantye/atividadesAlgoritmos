/*
Escreva uma função que receba o valor bruto do salário, faça os descontos de INSS
e IRRF (baseado em porcentagem real) e faça um log mostrando o valor do salário
bruto, o valor dos descontos e o valor do salário líquido.
*/

function main(){
    console.log(cap(2320, 12, 7.5));
}

function cap(din, inss, irrf){
    return `salario bruto: R$ ${din}\ndescontos: INSS: R$ ${(inss*din)/100} IRRF: R$ ${(irrf*din)/100}\nsalario liquido: R$ ${din - ((inss*din)/100) - ((irrf*din)/100)}`
}

main()