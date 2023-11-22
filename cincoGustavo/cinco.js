// 5.1. Crie uma função chamada criarContato que recebe informações como nome, telefone e email, e retorna um objeto representando um contato.
const leitor = require("readline-sync")
let nome = leitor.question(`nome: `)
let telefone = leitor.questionInt(`telefone: `)
let email = leitor.question(`email: `)

function criarContato(nome, telefone, email){
    this.nome = nome
    this.telefone = telefone
    this.email = email
}

let contatosCriar = new criarContato(nome, telefone, email)
// 5.2. Crie um array chamado agenda que irá armazenar diferentes contatos.
let agenda = []

// 5.3. Implemente uma função chamada adicionarContato que recebe um contato como parâmetro e o adiciona ao array agenda .


function adicionarContato(){
    agenda.push(contatosCriar.nome, contatosCriar.telefone, contatosCriar.email)
    console.log(agenda)
    }       

console.log(adicionarContato(agenda));
