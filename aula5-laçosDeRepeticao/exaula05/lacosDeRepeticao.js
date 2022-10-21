let num = 0

while(num < 50){
    num++
    console.log(num)
}

//contagem regressiva de 10 a 0

let regressiva = 10

do{
    regressiva--
    console.log(regressiva)
}while(regressiva > 0)

//Numeros pares de 1 a 0

for(let contagem = 1; contagem <= 100; contagem++){
    if(contagem % 2 == 0){
        console.log(`numero par = ${contagem}`)
    }
}