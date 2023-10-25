/* 
d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

const leitor = require("readline-sync")

let string = leitor.question("insira uma mensagem: ")

function mensagem(string){
    return `o tamanho da mensagem: "${string.toUpperCase()}" é ${string.length}`
}

let a = mensagem(string)
console.log(a);