// criando torres e inserindo na arvore do html
function criarTorres (){
    let torre1 = document.createElement('div')
    let torre2 = document.createElement('div')
    let torre3 = document.createElement('div')
    
    torre1.classList.add('torre')
    torre1.classList.add('torre1')
    torre2.classList.add('torre')
    torre2.classList.add('torre2')
    torre3.classList.add('torre')
    torre3.classList.add('torre3')

    document.querySelector('.hanoi').appendChild(torre1)
    document.querySelector('.hanoi').appendChild(torre2)
    document.querySelector('.hanoi').appendChild(torre3)
}
criarTorres()

//criando discos e inserindo na torre 1
function criarDiscos(){
    let disco1 = document.createElement('div')
    let disco2 = document.createElement('div')
    let disco3 = document.createElement('div')
    let disco4 = document.createElement('div')
    let disco5 = document.createElement('div')

    disco1.classList.add('disco')
    disco1.classList.add('tamanho1')
    
    disco2.classList.add('disco')
    disco2.classList.add('tamanho2')
    
    disco3.classList.add('disco')
    disco3.classList.add('tamanho3')
    
    disco4.classList.add('disco')
    disco4.classList.add('tamanho4')
    
    disco5.classList.add('disco')
    disco5.classList.add('tamanho5')
    
    document.querySelector('.torre1').appendChild(disco5)
    document.querySelector('.torre1').appendChild(disco4)
    document.querySelector('.torre1').appendChild(disco3)
    document.querySelector('.torre1').appendChild(disco2)
    document.querySelector('.torre1').appendChild(disco1)
}
criarDiscos()


let torres = document.querySelectorAll('.torre')

const torre1 = document.getElementsByClassName('torre1')
const torre2 = document.getElementsByClassName('torre2')
const torre3 = document.getElementsByClassName('torre3')

torre1[0].addEventListener('click', verificaClick)
torre2[0].addEventListener('click', verificaClick)
torre3[0].addEventListener('click', verificaClick)

if (torre1[0].childElementCount == 0){
    alert('venceu')
}

let click = false
let primeiraTorreClicada

function verificaClick(event){
    let torreClicada = event.currentTarget
    if (click == false){
        verificarTorre(torreClicada)
    }else{
        mudarDisco(primeiraTorreClicada, torreClicada)
    }
}

function verificarTorre(torreClicada){
    let lastDisco = torreClicada.lastElementChild
    if (torreClicada.childElementCount == 0 ){
        alert('Nenhum disco para selecionar')
    }else if(torreClicada.childElementCount > 0){
        primeiraTorreClicada = torreClicada
        click = true
    }
    
    
}


let arr = []
function mudarDisco(primeiraTorreClicada, segundaTorreClicada){
    let discoAtual = primeiraTorreClicada.lastElementChild
    if(primeiraTorreClicada === segundaTorreClicada){
            alert('Mesma torre clicada')
    }else{
        if(segundaTorreClicada.childElementCount == 0){
            segundaTorreClicada.appendChild(discoAtual)
        }else if(segundaTorreClicada.childElementCount > 0){
            let discoSegundaTorre = segundaTorreClicada.lastElementChild
            let tamanhoPrimeiroDisco = discoAtual.clientWidth
            let tamanhoSegundoDisco =  discoSegundaTorre.clientWidth
            if(tamanhoPrimeiroDisco < tamanhoSegundoDisco ){
                segundaTorreClicada.appendChild(discoAtual)
            }else{
                alert('Tamanho do primeiro disco maior que o tamanho do segundo disco')
            }
        }
        click = false
    }
}



