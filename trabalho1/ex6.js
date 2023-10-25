const leitor = require("readline-sync")

let string = leitor.question("digite um frase: ")
let con = string.match(/[^aeio u]/g)

console.log(con)