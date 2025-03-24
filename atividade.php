<?php

class Pessoa{
    public $nome;
    public $materia;
    private $nota;

    public function __construct($nome, $materia, $nota)
    {
        $this->nome = $nome;
        $this->materia = $materia;
        $this->nota = $nota;
    }
    public function verNota(){
        return $this->nota;
    }
}

class Aluno extends Pessoa{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome}, sou aluno e gosto de {$this->materia}.<br>";
    }
}

class Professor extends Pessoa{
    public function falar()
    {
        echo "Oi! Sou o Professor {$this->nome} e dou aula de {$this->materia}.<br>";
    }
}

class Diretor extends Pessoa{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou Diretor.<br>";
    }
}

class Funcionario extends Pessoa{
    public function falar()
    {
        echo "Oi! Sou o funcionário {$this->nome} e sou {$this->materia}.<br>";
    }
}

$natalia = new Aluno ("Natalia", "Matemática", 9);
$nicolly = new Aluno ("Nicolly", "Biologia", 10);
$ray = new Aluno ("Rayane", "Lingua Portuguesa", 10);
$mel = new Aluno ("Melissa", "História", 7);

$guilherme = new Professor ("Pedro", "Lingua Portuguesa", 7);
$sonia = new Professor ("Andresa", "Matemática", 5);
$re = new Professor ("Sérgio", "Biologia", 7.5);
$joa = new Professor ("Bruno", "História", 8);

$ro = new Diretor ("Roberta", "Diretora", 4.5);

$val = new Funcionario ("Valéria", "Diretora do ensino médio", 8);
$fabiana = new Funcionario ("Fabiana", "Coordenadora do ensino fundamental II", 5);


echo $natalia -> falar();
echo $nicolly -> falar();
echo $ray -> falar();
echo $mel -> falar();


?>