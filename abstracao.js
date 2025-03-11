class pessoa{
    constructor(nome){
        if(this.constructor === pessoa){
            throw new Error("Não pode criar...")
        }
        this.nome = nome;
    }
}

class aluno extends pessoa{}
const Nicolly = new aluno("Nicolly")
console.log(Nicolly.nome)
