<<<<<<< HEAD
const leitor = require("readline-sync")

function main(){
    let codigo = leitor.questionInt(`insira o codigo do produt: `)
    let valor = leitor.questionFloat(`insira o valor do produto: `)
    let quantidade = leitor.questionInt(`quantos produtos o cliente vai levar? `)
    let valorFinal = valor * quantidade

    console.log(`VALOR A PAGAR: R$${valorFinal}`);
}
=======
const leitor = require("readline-sync")

function main(){
    let codigo = leitor.questionInt(`insira o codigo do produt: `)
    let valor = leitor.questionFloat(`insira o valor do produto: `)
    let quantidade = leitor.questionInt(`quantos produtos o cliente vai levar? `)
    let valorFinal = valor * quantidade

    console.log(`VALOR A PAGAR: R$${valorFinal}`);
}
>>>>>>> e44d2536eb32531cc18e813d7827dbcb571a3743
main()