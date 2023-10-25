//1. Faça um programa que:
//a) Pergunte a idade do usuário
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta ( true ou false )
//d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)
 const leitor = require("readline-sync")

 let suaIdade = leitor.questionInt("digite sua idade: ")
 let amigoIdade = leitor.questionInt("digite a idade do seu melhor amigo: ")

 console.log("Sua idade é maior do que a do seu melhor amigo?",suaIdade>amigoIdade);
 console.log("a diferença de idade é de",suaIdade-amigoIdade,"anos");