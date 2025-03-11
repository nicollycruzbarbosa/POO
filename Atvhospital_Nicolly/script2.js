// Parte dos Alunos
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos de idade.`;
    }
  }
  
  class Aluno extends Pessoa {
    estudar() {
        return `${this.nome} está estudando.`;
    }
  }
  
  class Professor extends Pessoa {
    darAula() {
        return `${this.nome} está dando aula.`;
    }
  }
  
  // Criando os objetos
  const Nicolly = new Aluno("Nicolly", 17);
  const Raul = new Professor("Raul", 28);
  const Natalia = new Aluno("Natália", 17);
  const Nadja = new Professor("Nadja", 38);
  
  // Exibir no HTML
  document.getElementById("alunos").innerHTML = `
    <p>${Nicolly.apresentar()}</p>
    <p>${Nicolly.estudar()}</p>
    <p>${Natalia.apresentar()}</p>
    <p>${Natalia.estudar()}</p>
    <p>${Raul.apresentar()}</p>
    <p>${Raul.darAula()}</p>
    <p>${Nadja.apresentar()}</p>
    <p>${Nadja.darAula()}</p>
  `;