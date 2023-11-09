const leitor = require("readline-sync")

function main(){
    let vertebra = leitor.question("o animal é vertebrado ou inveretebrado? ")
    let classe  = leitor.question("insira a classe do animal: ")
    let ordem = leitor.question("insira a ordem do animal: ")

    if (vertebra === "vertebrado" && classe === "ave" && ordem === "carnivoro"){
        console.log("aguia");    
    }
    else if (vertebra === "vertebrado" && classe === "ave" && ordem === "onivoro"){
        console.log("pomba");
    }
    else if (vertebra === "vertebrado" && classe === "mamifero" && ordem === "onivoro"){
        console.log("homem");
    }
    else if (vertebra === "vertebrado" && classe === "mamifero" && ordem === "herbivoro"){
        console.log("vaca");
    }    
    else if (vertebra === "invertebrado" && classe === "inseto" && ordem === "hematofago"){
        console.log("pulga");
    }    
    else if (vertebra === "invertebrado" && classe === "inseto" && ordem === "herbivoro"){
        console.log("lagarta");
    }    
    else if (vertebra === "invertebrado" && classe === "anelideo" && ordem === "hematofago"){
        console.log("sanguessuga");
    }    
    else if (vertebra === "invertebrado" && classe === "anelideo" && ordem === "onivoro"){
        console.log("minhoca");
    }
    else {
        console.log("nao existe");
    }
}
main()