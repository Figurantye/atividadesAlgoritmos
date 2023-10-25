const leitor = require("readline-sync")

let frase = leitor.question("insira um frase: ")
let novafrase = frase.replace("o", "i")
console.log(novafrase.toUpperCase());