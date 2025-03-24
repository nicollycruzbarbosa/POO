<?php
$aluno = [
    "nome" => "Nicolly",
    "idade" => "16",

    "estudar" => function() use (&$aluno){
        echo "{$aluno['nome']} está estudando";
    }
];
$aluno['estudar']();