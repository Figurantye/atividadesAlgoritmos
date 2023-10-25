/*Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde
esse dado em uma variável.
a) Se a quantidade for 0, imprima no console "Que pena! Você pode
adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes
deles, um por um, e guarde esses nomes em um array

Coloque o seu prompt dentro de um loop. Esse loop deve
ser executado a mesma quantidade de vezes que o usuário
inseriu. Por exemplo: se o usuário tem 4 pets, ele deve
conseguir inserir 4 nomes.

c) Por fim, imprima o array com os nomes dos bichinhos no console*/
const leitor = require("readline-sync")

let numPets = leitor.question("Quantos animais de estimação você tem?");
let nomesPets = [];

if(numPets === 0){    
    console.log("Que pena! Você pode adotar um pet!");
} else if (numPets > 0) {
    for (let i = 1; i <= numPets; i++) {
        let Pet = leitor.question(`Digite o nome do seu ${i}º pet:`);
        nomesPets.push(Pet);
  }

console.log("Nomes dos seus animais de estimação:");
for (let i = 0; i < nomesPets.length; i++) {
    console.log(nomesPets[i]);
  }
}