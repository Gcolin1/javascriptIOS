class carro {
    constructor(nome, ano, rodas, porta, janelas){
        this.nome = nome;
        this.ano = ano;
        this.rodas = rodas;
        this.porta = porta;
        this.janelas = janelas
    }
}

const fiat = new carro("touro", 2020, 4, 4, 6)

console.log(`o carro ${fiat.nome} ano ${fiat.ano}, tem ${fiat.rodas} rodas, ${fiat.porta} portas e ${fiat.janelas} janelas`)