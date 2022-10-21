/* 1) Receber o preço de três produtos e informar qual
produto possui o menor valor. */

let cocaCola = 10
let pepsi =  8
let guarana = 6

if(cocaCola < pepsi && cocaCola < guarana){
    console.log(`esse é o menor preço ${cocaCola}`)
}else if(pepsi < cocaCola && pepsi < guarana){
    console.log(`esse é o menor preço ${pepsi}`)
}else{
    console.log(`esse é o menor preço R$${guarana.toFixed(2)}`)
}

//2)Receber três números e mostrar em ordem crescente

let num1 = 35
let num2 = 76
let num3 = 100
let maior = 0
let meio = 0
let menor = 0

if(num1 > num2 && num1 > num3){
    maior = num1

    if(num2 > num3){
        meio = num2
        menor = num3
    }else{
        menor = num2
        meio = num3
    }
    
}if(num1 < num2 && num1 < num3){
    menor = num1
        if(num2 > num3){
            maior = num2
            meio = num3
        }else{
            maior = num3
            meio = num2
        }
}else{
    meio = num1
        if(num2 > num3){
            maior = num2
            menor = num3
        }else{
            maior = num3
            menor = num2
        }
}

console.log(`${menor} ${meio} ${maior}`)

/*3)Receber um número correspondente a um determinado
ano e em seguida informar se este ano é bissexto*/

let ano = 2024 

if(ano % 4 == 0 || ano % 400 == 0){
    console.log(`${ano} é um ano é bissexto tem 366 dias`)
}else{
    console.log(`${ano} não é um ano é bissexto tem 365 dias`)
}