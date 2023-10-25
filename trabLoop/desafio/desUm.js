/*a) Solicitar que o primeiro jogador escolha um número, através do prompt. Neste momento, deve-se imprimir no console a mensagem Vamos jogar!
b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do prompt. A cada chute, deve ser informado no console: O número chutado, com a mensagem: O número chutado foi: <número>
Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: Errou. O número escolhido é maior/menor
c) Quando o segundo jogador acertar o número escolhido pelo primeiro ogador, deve ser impressa a mensagem: Acertou ; e, embaixo, O número de
tentativas foi : <quantos chutes o usuário deu>
Observação 👀
Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, mas lembrem-se de cobrir todos os casos pedidos!*/
const leitor = require("readline-sync")

function main(){
    let numDois;        
    let menu = true
    console.log("vamos comecar!");
    let num = leitor.questionInt("jogador um, insira um numero (entre 1 e 20) para que o jogador dois tente advinhar: ");
    for(i = 0; i == (numDois == num); i++){
        while(menu){
            numDois = leitor.questionInt("insira um numero de 1 a 20: ")
            i++
            switch(menu){
                case numDois === num:
                    console.log("https://www.youtube.com/watch?v=gUkaoy1Pr7E");
                    menu = false
                    break
                case numDois > 20 || numDois < 1:
                    console.log("UM NUMERO VALIDO DE 1 A 20");
                    break
                case numDois > num:
                    console.log("chutou alto");
                    break
                case numDois < num:
                    console.log("chutou baixo");
                    break
            } 
        } console.log(`numero de tentativas: ${i}`);
    }
}
main()