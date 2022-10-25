class carro {
    constructor(nome, ano, rodas, porta, janelas){
        this.nome = nome;
        this.ano = ano;
        this.rodas = rodas;
        this.porta = porta;
        this.janelas = janelas
    }

    //metodo que retorna a idade do meu carro
    idadeCarro = (anoAtual) =>{
       return anoAtual - this.ano
    }

}

dataHoje = new Date().getFullYear()

const fiat = new carro("touro", 2020, 4, 4, 6)
console.log(fiat)
console.log(fiat.nome)
console.log(fiat.idadeCarro(dataHoje))