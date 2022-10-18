var array1 = ["marcelo", 20, "colin", 47]

array1[3] = 80;

console.log(array1)

//array bidimensional 

var array2 = [
    ["pipoca", 10, false],
    ["string", 20, true],
    ["margarina", 12, false]
]

array2[1][1] = 28

console.log(array2)

//array de objeto carro

var carro = ["uno", 1998, "0km", false, 2]
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro)

var y = carro.join(" ? ")
console.log(carro)
console.log(x)
console.log(y)


console.log(carro.length)

//pop remove ultimo elemento
//var t = carro.pop()

//push adiciona elemento no final do array
var u = carro.push('lego')
console.log(carro)


var p = carro.shift()

console.log(carro)
console.log(p)

var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

//Apagar ul elemento do array em uma posiçãopré selecionada

delete carro[1]
console.log(carro)