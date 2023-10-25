/*
Faça uma função main() que tenha o tempo que você gastou no celular ontem e no
celular hoje. Você criará uma função chamada timeSpent() que retorna um Boolean
true para hoje maior que ontem. 
*/

function main(){
    console.log(timeSpent(230, 190));
}
 
function timeSpent(hoje, ontem){
    if (hoje > ontem){
        console.log(`gastei mais tempo no celular hoje`);
    } else {
        console.log(`gastei mais tempo no celular ontem`);
    }
}

main()