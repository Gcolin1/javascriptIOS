window.alert("Boas vindas")
document.title = "Dominando js"

let sec = document.createElement('section')
document.body.appendChild(sec)
let heading = document.createElement('h1')
heading.innerHTML = "bob esponja"
sec.appendChild(heading)
let p1 = document.createElement('p')
p1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
sec.appendChild(p1)

let art = document.createElement('article')
document.body.appendChild(art)
let headingArt = document.createElement('h1')
headingArt.innerHTML = "Patrick"
art.appendChild(headingArt)
let p2 = document.createElement('p')
p2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
art.appendChild(p2)
