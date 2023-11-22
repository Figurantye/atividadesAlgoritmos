//implementação de uma fila em JS
class Fila{
    constructor(){
        this.items = []
    }

    //adicionar elemnto no fim da fila
    enfileirar(elemento){
        this.items.push(elemento)
    }

    //remove o elemento no fim da fila e retorna
    desinfileirar(){
        if(this.isEmpty()){
            return "a fila esta vazia"
        }

        return this.items.shift()
    }
    //retorna o elemento no inicio da fila sem remove-lo
    frente(){
        if(this.isEmpty()){
            return "a fila esta vazia"
        }
        return this.items[0]
    }

    //verifica se a fila esta vazia
    isEmpty(){
        return this.items.length === 0
    }

    //retorna o tamanho da fila

    tamanho(){
        return this.items.length
    }

}

//exemplo de uso da fila
let fila = new Fila()
fila.enfileirar(1)
fila.enfileirar(2)
fila.enfileirar(3)

console.log(fila.desinfileirar());
console.log(fila.frente());
console.log(fila.tamanho());