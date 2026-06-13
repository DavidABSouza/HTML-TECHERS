// clase: Ela dita como os objetos pertencentes a ela irão se parecer
// objeto: São instâncias, as criações individuais a partir da classe

class Pessoa { 
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Professor extends Pessoa{
    constructor(){
        super();
    }
}

const  aluno = new Pessoa("David", 24) //Instanciei um objeto novo

