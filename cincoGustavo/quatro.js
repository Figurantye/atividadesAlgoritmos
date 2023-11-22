// 4.1. Crie um array chamado numeros com pelo menos 5 números inteiros.
array = [3, 8, 4, 10, 34]

// 4.2. Crie uma função chamada somarArray que recebe um array de números como parâmetro e retorna a soma de todos os elementos.
function somarArray(array){
    let soma = array.reduce((a, b) => a + b)
    return soma
}
// 4.3. Utilize um loop para percorrer o array numeros e exiba no console a soma total.
console.log(somarArray(array))