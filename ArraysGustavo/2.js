const leitor = require("readline-sync")

const frase = leitor.question("insira uma frase: ")
const novaFrase = frase.replaceAll("o","i")

console.log(novafrase.toUpperCase());