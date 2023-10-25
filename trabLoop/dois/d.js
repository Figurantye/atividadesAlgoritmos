/*Considere que você tenha acesso a um array (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que imprime cada um dos valores do arrayoriginal.
b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero ". Depois, imprima este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/
let original = [15, 22, 3, 41, 25]
let novo = []
function index(num){
    for (i = 0; i <= num.length - 1; i++){
        novo = `o elemento do index ${i} é ${num[i]}`;
        console.log(novo);
    }
}

index(original)