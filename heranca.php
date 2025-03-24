<?php

class Pessoa {
    public $nome;
    public $idade;
    
public function __construct($nome, $idade)
{
   $this->nome= $nome;
   $this->idade = $idade;

}

public function apresentar(){
    echo "Olá, sou {$this->nome} e tenho {$this->idade}";
}
}

// A classe aluno herdar de pessoas
class Aluno extends Pessoa{
    public function estudar(){
        echo "{$this->nome} esta estudando";
    }
}
// a classe professor herda de pessoas
class professor extends Pessoa{
    public function ensinar(){
        echo "Professor {$this->nome} esta ensinando";
    }
}

// criando objetos
$isa = new Aluno ("Isa", 19 );
$raul = new Professor ("Raul", 49);

echo $isa->estudar();
echo $isa->apresentar();
echo $raul->ensinar();
echo $raul->apresentar();
?>