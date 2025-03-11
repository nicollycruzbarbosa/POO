class Hospital {
    #cpf;
    constructor(nome, idade, funcao, cpf) {
      this.nome = nome;
      this.idade = idade;
      this.funcao = funcao;
      this.#cpf = cpf;
    }
    verCpf() {
      return `Informação restrita*`
    }
    mostrar() {
      return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos. Minha função no hospital é ${this.funcao}, CPF: ${this.verCpf()}`;
  }
  }
  
  const Bruna = new Hospital ("Bruna", 19, "Recepcionista, recepciono vários clientes", 12345678910)
  const Nicolly = new Hospital ("Nicolly",23, "Fisioterapia, eu amo ajudar pacientes", 12345678911)
  const Rafael = new Hospital ("Rafael", 37, "Cirurgia geral e eu amo minha profissão", 12345678912)
  const Anderson = new Hospital ("Anderson", 18, "Segurança, conte comigo para segurança", 12345678913)
  const Jessica = new Hospital ("Jessica", 38, "Ginecologia, amo cuidar das mulheres ", 12345678914)
  const Natalia = new Hospital ("Natalia", 26, "Pediatria, amo cuidar crianças", 12345678915)
  const Felipe = new Hospital ("Felipe", 30, "Otorrino, amo cuidar pricipalmente de ouvidos", 12345678916)
  
  document.getElementById("info").innerHTML=
  `<p>${Bruna.mostrar()}</p>
   <p>${Nicolly.mostrar()}</p>
   <p>${Rafael.mostrar()}</p>
   <p>${Anderson.mostrar()}</p>
   <p>${Jessica.mostrar()}</p>
   <p>${Natalia.mostrar()}</p>
   <p>${Felipe.mostrar()}</p>`
  