/*
Escreva uma função main() que tenha uma variável com o nome do item, o valor e
um desconto em %. No final faça o print do nome do item, do valor original e do valor
com desconto.
*/

function main(){
    let item = "abajur"
    let val = 20
    let desc = 10

    console.log(`item: ${item}\nvalor original: R$ ${val}\nvalor com desconto: R$ ${val - (desc*val)/100}`);
}


main()