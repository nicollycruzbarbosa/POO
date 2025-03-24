// criando a classe Aluno
class objeto{
    constructor(nome, idade) {
        // o instructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }
        estudar = () => console.log(`${this.nome} está estudando.`);
    }

    const Nicolly = new objeto("Nicolly" , 17)
    
    console.log(Nicolly.nome)
    Nicolly.estudar()

   