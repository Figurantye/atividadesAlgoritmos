/*Desenvolva um programa que determine e imprima todos os números primos de 1 a 100.*/
function primo(num){
    for (let i = 2; i < num; i++){ 
        if (num % i === 0) {
            return false
        }
    } return true
}

for (let i = 2; i < 100; i++){
    if (primo(i)) {
        console.log(i);
    }
}