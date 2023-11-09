 /*1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "profissão".
2. Adicione um método ao objeto "pessoa" chamado "apresentar", que retorna uma string com o nome, idade e profissão da pessoa.
*/
function pessoa(nome, idade, profissao){
    this.apresentar = (`nome: ${nome} \nidade: ${idade} \nprofissao: ${profissao}`)
 }
/*3. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano".
4. Adicione um método ao objeto "carro" chamado "informacoes", que retorna uma string com a marca, modelo e ano do carro.
*/
 function carro(marca, modelo, ano){
    this.info = (`marca: ${marca} \nmodelo: ${modelo} \nano: ${ano}`)   
 }
/*5. Crie um objeto chamado "produto" com as propriedades "nome", "preco" e "quantidade".
6. Adicione um método ao objeto "produto" chamado "total", que retorna o valor total do produto (preço multiplicado pela quantidade).
*/
 function produto(nome, preco, quantidade){
    preco.toFixed(2)
    this.total = preco * quantidade
 }
 /*7. Crie um objeto chamado "contaBancaria" com as propriedades "titular", "saldo" e "depositar".
8. Adicione um método ao objeto "contaBancaria" chamado "sacar", que recebe um valor como parâmetro e subtrai esse valor do saldo.
*/
function contaBancaria(titular, saldo, depositar, saque){
    this.sacar = saldo - saque
    this.sacar.toFixed(2)
}
/*9. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "paginas".
10. Adicione um método ao objeto "livro" chamado "ler", que exibe uma mensagem dizendo que o livro está sendo lido.
*/
function livro(titulo, autor, paginas){
    this.ler = "o livro esta sendo lido"
}