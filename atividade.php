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
        echo "Oi! Meu nome é {$this->nome} e sou Diretora.<br>";
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

$pedro = new Professor ("Pedro", "Lingua Portuguesa", 7);
$andresa = new Professor ("Andresa", "Matemática", 5);
$sergio = new Professor ("Sérgio", "Biologia", 7.5);
$bru = new Professor ("Bruno", "História", 8);

$val = new Diretor ("Valéria", "Diretora", 4.5);

$ro = new Funcionario ("Roberta", "Coordenadora do ensino médio", 8);
$jo = new Funcionario ("Joelma", "Coordenadora do ensino fundamental ", 5);


echo $natalia -> falar();
echo $nicolly -> falar();
echo $ray -> falar();
echo $mel -> falar();
echo$val -> falar();
echo$ro -> falar();
echo$jo -> falar();
echo$val -> falar();



?>