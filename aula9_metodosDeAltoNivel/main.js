var frutas = ["Banana", "Maça", "Kiwi", "Melancia"]

/* O método forEach() executa uma determinada função para
cada um dos elementos de um array. Ele não é executado em
elementos vazios do array. A sintaxe do método é: */

frutas.forEach(minhaFuncao = (valor, indice) =>{
    console.log(`valor:${valor}, indice: ${indice}`)
})

//metodo forEach com array de objetos

const alunos = [
    {
        id: 1,
        nome: "Marcelo",
        passou: true
    },
    {
        id: 2,
        nome: "Agatha",
        passou: false
    },
    {
        id: 3,
        nome: "Vitor",
        passou: false
    }
]

alunos.forEach((aprovados) => (console.log(`o aluno ${aprovados.nome}, foi aprovado? ${aprovados.passou}`)))

/* O método map() cria um novo array com o resultado gerado pela
chamada de uma função para cada elemento do array. Ele não é
executado em elementos vazios do array. A sintaxe do método é:
 */

/* Trabalhando com metodo map */

const numeros = [2, 7, 8, 50, 34]
var novoValor = numeros.map(Math.sqrt)//Math é um metodo para calculos matematicos, sqrt retorna a raiz quadrada do numero
console.log(novoValor)

console.clear()

const cachorro = [
    {
        id: 1,
        nome: "bololinho",
        idade: 11
    },
    {
        id: 2,
        nome: "Toby",
        idade: 7
    },
    {
        id: 3,
        nome: "Pingo",
        idade: 6
    }
]

const mapCachorro = cachorro.map((nomeDog) => {
    return nomeDog.nome
})

console.log(mapCachorro)

/* 
METODO FILTER()

O método filter() cria um novo array com o resultado do filtro aplicado
pelo método, ou seja, os elementos que “passaram” na condição
configurada no filtro. A sintaxe do método é:
 */

console.clear()

// Trabalhando com filter

const idade = [5, 9, 10, 15, 25, 35, 45, 89]

//retornando apenas idades menores que 30
let filtroIdade = idade.filter((idades) =>{
    return idades < 30
})
console.log(filtroIdade)

/* 
METODO FIND()

O método find() retorna o valor dos elementos do array que passarem na
condição configurada. Semelhante ao método filter(), porém o find() não
cria um novo array. A sintaxe do método é:
 */

console.clear()

console.log(
    cachorro.find((retornaNome) => {
        return retornaNome.nome === 'Pingo'
    })
)

