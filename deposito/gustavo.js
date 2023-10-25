const leitor = require("readline-sync");
//exercício 1:
//A
let meuNome;
//B
let idade;
//C
console.log(typeof meuNome);
console.log(typeof idade);
//D: porque as variaveis estão vazias
//E
meuNome = leitor.question("digite seu nome: ");
idade = leitor.questionInt("digite sua idade: ");
//F: os valores das variáveis apareceram após serem definidos 
console.log(typeof meuNome);
console.log(typeof idade);
//G
console.log("olá", meuNome, "você tem", idade, "anos");

//exercício 2:
//A
let sim = "SIM";
let não = "NÃO";
//B
console.log("você está usando roupa curta?",sim);
console.log("você vai viajar final do ano?",não);
console.log("está chovendo hoje?",sim);

//exercício 3
let a = 20;
let b = 15;
let c;
c = b;
b = a;
a = c;
console.log("o novo valor de a é",a);
console.log("o novo valor de b é",b);