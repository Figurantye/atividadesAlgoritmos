//1) Verificando a Idade: Peça ao usuário sua idade e, em seguida, exiba uma mensagem dizendo se ele é maior de idade ou menor de idade.
//2) Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.
//3) Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".
//4) Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.
//5) Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar qual é o maior dos três. Em seguida, exiba o número maior.

//1
const leitor = require("readline-sync")

let idade = leitor.questionInt ("digite sua idade: ")

if (idade >= 18) {
    console.log("parabéns, você é maior de idade");
} else {
    console.log("você é menor de idade");
}

//2
let a = leitor.questionFloat("insira um numero: ")

if (a > 0) {
    console.log("o numero é positivo");
} else {
    console.log("o numero é negativo");
} if (a === 0) {
    console.log("o numero é igual a 0");
}

//3
let senhaReal = "3314"
let senha = leitor.question("insira sua senha: ")
if (senha === senhaReal) {
    console.log("Login bem-sucedido");
} else {
    console.log("senha incorreta");
}

//4
let v1 = leitor.questionFloat("insira o primeiro valor: ") 
let op = leitor.question("insira uma das opções: \n +: soma \n -: subtrair \n /: dividir \n *: multiplicar: ")
let v2 = leitor.questionFloat("insira o segundo valor: ")

if (op === "+") {
    console.log(v1 + v2);
} else if (op === "-") {
    console.log(v1 - v2);
} else if (op ==="/") {
    console.log( v1 / v2);
} else if (op === "*") {
    console.log(v1 * v2);
}
//5
let num1 = leitor.questionInt("insira o primeiro numero: ")
let num2 = leitor.questionInt("insira o segundo numero: ")
let num3 = leitor.questionInt("insira o terceiro numero: ")

if (num1 > (num2 && num3)) {
    console.log(`o maior numero é ${num1}`);
} else if (num3 > (num1 && num2)) {
        console.log(`o maior numero é ${num3}`);
} else {
    console.log(`o maior numero é ${num2}`);
}