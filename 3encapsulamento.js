// criando a classe Aluno
class Aluno{
    #nota
    constructor(nome, idade, nota) {
        // o instructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
        estudar = () => console.log(`${this.nome} está estudando.`);

        verNota = () => this.#nota
    }

    const Nicolly = new Aluno("Nicolly" , 17, 90)   
    
    // console.log(Nicolly.nome)
    // Nicolly.estudar()
    // console.log(Nicolly.idade);
    // console.log(Nicolly.verNota());
    
    Nicolly.estudar()
        console.log(Nicolly.nome,Nicolly.idade,Nicolly.verNota())