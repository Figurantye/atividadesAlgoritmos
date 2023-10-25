const leitor = require("readline-sync")

let string = leitor.question("digite um frase: ")
let vogais = string.match(/[aeio u]/g)

console.log(vogais)