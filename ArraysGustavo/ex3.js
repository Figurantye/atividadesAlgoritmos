const leitor = require("readline-sync")

let cachorro = ["chowchow", "pitbull", "pintcher", "vira-lata", "salsicha"]
let a = leitor.question("escolha um numero de 0 a 4: ")
a = cachorro[a]
console.log(a);
