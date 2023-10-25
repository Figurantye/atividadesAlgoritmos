const leitor = require("readline-sync")
///1
let a = leitor.questionInt("insira o primeiro valor: ");
let b = leitor.questionInt("insira o segundo valor: ");
console.log("a resposta da questão 1 é",a+b);

///2
let c = leitor.questionInt("insira o primeiro valor: ");
let d = leitor.questionInt("insira o segundo valor: ");
let e = leitor.questionInt("insira o terceiro valor: ")
console.log("a resposta da questão 2 é",c*d/e);

///3
let f = leitor.questionInt("insira o primeiro valor: ");
let g = leitor.questionInt("insira o segundo valor: ");
let h = leitor.questionInt("insira o terceiro valor: ");
console.log("a resposta da questão 3 é",(f-g)*h);

///4
let i = leitor.questionInt("insira o primeiro valor: ");
let j = leitor.questionInt("insira o segundo valor: ")
console.log("a resposta da questão 4 é",i%j)