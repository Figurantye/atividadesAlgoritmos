//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false :
//O primeiro numero é maior que segundo? //true
//O primeiro numero é igual ao segundo? //false
//O primeiro numero é divisível pelo segundo? //true
//O segundo numero é divisível pelo primeiro? //true
//obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const leitor = require("readline-sync")
let a = leitor.questionInt("digite o primeiro valor: ")
let b = leitor.questionInt("digite o segundo valor: ")

console.log("o primeiro numero é maior que o segundo?",a>b);
console.log("o primeiro numero é igual ao segundo?",a===b);
console.log("o primeiro numero é divisivel pelo segundo?",(a%b)===0);
console.log("O segundo numero é divisível pelo primeiro?",(b%a)===0);