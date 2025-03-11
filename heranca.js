//criar classe Pessoa
// com parametros Nome e Idade
//criar um metodo para apresentar
//Olá, sou nome e tenho idade anos
class Pessoa{
    constructor(nome, idade) {
        // o instructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }
        apresentar = () => console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

    class Aluno extends Pessoa{
        estudar = () => console.log(`${this.nome} está estudando`);

    }
    class Professor extends Pessoa{
        ensinar = () => console.log(`Pro`)

    }

    //criando onjetos
    const Nicolly = new Pessoa("Nicolly" , 17);

    const Raul = new Professor("Raul" , 35);
    
    Nicolly.apresentar();
    Raul.apresentar();




    