// pessoa tem um metodo padrão apresentar();
class pessoa{
    constructor(nome){
        this.nome = nome
    };
    apresentar = ()=> console.log
}
//aluno e professor herdam esse metodo, mas reescrevem, para exibir mensagens diferentes
//mesmo metodo, e comportamentos diferentes ISSO É POLIMORFISMO
class aluno extends pessoa{
    apresentar = () => console.log(`${this.nome} está codando`);
}

class professor extends pessoa{
    apresentar = () => console.log(`Professor está ensinando`)
}
// criar objeto nicolly aprende isso logo

const Nicolly = new aluno("Nicolly")

const Raul = new professor("Raul")

Nicolly.apresentar();
Raul.apresentar();