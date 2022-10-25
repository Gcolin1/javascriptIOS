class alunos{
    constructor(id, nome, idade, desistente){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.desistente = desistente
    }
}

const guilherme = new alunos(1, 'guilherme', 20, false)
const diego = new alunos(2, 'Diego', 22, false)
const julia = new alunos(3, 'Julia', 17, false)

console.log(guilherme)
console.log(diego)
console.log(julia)