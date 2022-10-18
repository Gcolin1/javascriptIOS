//Array unidimensional

 var linguagens = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java",
    1995]

console.log(linguagens)
console.log(linguagens.length)
console.log(linguagens[6])

var linguagensString = linguagens.toString()

console.log(typeof linguagensString )

var trocarSeparador = linguagens.join(" / ")

console.log(trocarSeparador)

var adicionarIos = linguagens.unshift("IOS")

console.log(linguagens)

//Array bidimensional

var bidimensional = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
]

console.log(bidimensional)
console.log(bidimensional.length)
console.log(bidimensional[2][1])

bidimensional[1][2] = "Javascript"

console.log(bidimensional)

delete bidimensional[2][2]

console.log(bidimensional)

bidimensional[2].push("pipoca")
console.log(bidimensional)

