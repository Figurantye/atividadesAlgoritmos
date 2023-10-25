function main(){
    let num1 = 40
    let num2 = 35
    let num3 = 72

    console.log(`adição: ${soma(num1, num2, num3)}\nsubtração: ${menos(num1, num2, num3)}\nmultiplicação: ${vezes(num1, num2, num3)}\ndivisão: ${dividir(num1, num2, num3)}`);
}

function soma(num1, num2, num3){
    return num1 + num2 + num3
}

function menos(num1, num2, num3){
    return num1 - num2 - num3
}

function vezes(num1, num2, num3){
    return num1 * num2 * num3 
}

function dividir(num1, num2, num3){
    return num1 / num2 /num3
}

main()