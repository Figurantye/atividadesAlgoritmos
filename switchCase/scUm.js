const leitor = require("readline-sync")

function main(){
    let a = leitor.questionInt("insira o primeiro valor: ")
    let b = leitor.questionInt("insira o segundo valor: ")

    let opcao = leitor.questionInt("insira um valor de 1 a 4 para a representação da operação: \n1 - soma \n2 - subtracao \n3 - multiplicacao \n4 - divisao \n: ")

    switch(opcao){
        case 1:
            mais(a, b)
            break
        case 2:
            menos(a, b)
            break
        case 3:
            vezes(a, b)
            break
        case 4: 
            dividir(a, b)
            break
    }
}

function mais(a, b) {
    console.log(a + b);
}

function menos(a, b) {
    console.log(a - b);
}

function vezes(a, b){
    console.log(a * b);
}

function dividir(a, b){
    console.log(a / b);
}

main()