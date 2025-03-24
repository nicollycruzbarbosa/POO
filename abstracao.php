<?php
abstract class Pessoa{
    public $nome;

    public function __construct($nome){
        $this->nome=$nome;
    }
}

class Aluno extends Pessoa{
}
$nicolly = new Aluno ("Nicolly");
echo $nicolly->nome ."É ele";

?>