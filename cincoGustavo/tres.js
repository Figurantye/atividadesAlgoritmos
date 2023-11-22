// 3.1. Crie um objeto chamado pessoa com propriedades como nome , idade e profissao .
function pessoa(nome, idade, profissao){
    //3.2. Adicione um método ao objeto pessoa chamado apresentar , que exiba no console uma mensagem com as informações da pessoa.
    this.apresentar = (`nome: ${nome} \nidade: ${idade} \nprofissao: ${profissao}`)
}
// 3.3. Crie pelo menos duas instâncias do objeto pessoa com dados diferentes e chame o método apresentar para cada uma.
let pessoaFicticiaUm = new pessoa("paulo", 26, "mecanico")
let pessoaFicticiaDois = new pessoa("Gustavo", 18, "desempregado")

console.log(pessoaFicticiaUm.apresentar);
console.log(pessoaFicticiaDois.apresentar);