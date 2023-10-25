const leitor = require ("readline-sync")
let nome = leitor.question("insira o seu nome: ")
let cor = leitor.question("insira sua cor favorita: ")

console.log(`a cor favorita de ${nome} é ${cor}`);
console.log("a cor favorita de",nome,"é",cor)