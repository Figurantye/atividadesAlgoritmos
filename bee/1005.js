const leitor = require("readline-sync")

function main(){
    let numQuest = leitor.questionInt("quantas notas serao calculadas? ")
    let soma = 0;
    for (let i = 1; i <= numQuest; i++){
        let notas = leitor.questionInt(`insira a nota numero ${i}: `)
        soma += notas
    }
    let media = soma / numQuest
    console.log(media);

}
main()