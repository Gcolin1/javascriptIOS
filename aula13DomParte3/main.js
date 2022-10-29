let paragrafo = document.querySelector('p')
paragrafo.style.background = '#Fbbeba'

let parClasse = document.querySelector('p.exemplo').innerHTML = 'mudei o texto';

let divClass = document.querySelector('.myClass').style.fontSize = "x-large"

const clique = () =>{
    document.querySelector('#my-span').style.backgroundColor = '#CCC'
}

const passou = () =>{
    document.querySelector('.container').style.color = '#fff'
}

let listaLi = document.querySelectorAll('li')
for(i = 0; i < listaLi.length; i++){
    listaLi[i].style.border = '1px solid #0000ff'
    listaLi[i].style.padding = '5px'
}

//Acessando o array de li com o id

let myLi = document.querySelectorAll('#my-li')
myLi.forEach(li => {
    li.innerHTML = 'mudamos'
    li.style.background = '#ccc'
});

