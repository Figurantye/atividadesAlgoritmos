const leitor = require("readline-sync")

function main(){
    let numDois;        
    let menu = true
    console.log("vamos comecar!");
    let sistema = Math.floor((Math.random() * 100) + 1)
    for(i = 0; i == (numDois == sistema); i++){
        while(menu){
            numDois = leitor.questionInt("insira um numero de 1 a 100: ")
            i++
            switch(menu){
                case numDois === sistema:
                    console.log("https://www.youtube.com/watch?v=gUkaoy1Pr7E");
                    menu = false
                    break
                case numDois > 100 || numDois < 1:
                    console.log("UM NUMERO VALIDO DE 1 A 100");
                    break
                case numDois > sistema:
                    console.log("chutou alto");
                    break
                case numDois < sistema:
                    console.log("chutou baixo");
                    break
            } 
        } console.log(`numero de tentativas: ${i}`);
    }
}
main()

//não vejo como a alteração poderia ser feita de forma mais facil, com a ajuda dos links foi bem fácil. a parte realmente dificil foi a construção da 1 (que serviu de base pra essa)