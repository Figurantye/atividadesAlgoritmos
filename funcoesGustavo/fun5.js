const leitor = require("readline-sync")

var h
let c1 = leitor.questionFloat("insira o valor do cateto 1: ")
let c2 = leitor.questionFloat("insira o valor do cateto 2: ")

function tp(h, c1, c2){
    return h = Math.sqrt((c1*c1)+(c2*c2))
}

let pitagoras = tp(h, c1, c2)

console.log(pitagoras);