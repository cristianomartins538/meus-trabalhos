montarListaProdutos(produtos);

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);

function mostrarTodos(){
    montarListaProdutos(produtos);
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

function filtrarPorHortifruti(){
    const listaHortifruti = produtos.filter(({secao})=>{
        return secao === 'Hortifruti';
    })
    montarListaProdutos(listaHortifruti);
}

const botaoBuscaPorNome = document.getElementsByClassName('containerBuscaPorNome')[0]
botaoBuscaPorNome.addEventListener('submit', filtrarCampoDeBusca)


function filtrarCampoDeBusca(e) {
    var pesquisa = document.getElementById('campoBuscaPorNome').value.toLowerCase()
    const arrPesquisa = produtos.filter(({nome, secao, categoria}) => {
        return nome.toLowerCase() === pesquisa || secao.toLocaleLowerCase() === pesquisa || categoria.toLocaleLowerCase() === pesquisa
    });
    e.preventDefault()
    montarListaProdutos(arrPesquisa)
}


const vitrinePrincipal  = document.querySelector('ul')
const ulCarrinho   = document.querySelector('.carrinho')

vitrinePrincipal.addEventListener('click', adicionarCarrinho)

function adicionarCarrinho(event) {
    const buttonAdicionarAoCarrinho = event.target
    if (buttonAdicionarAoCarrinho.tagName == "BUTTON"){
        const idProduto = buttonAdicionarAoCarrinho.id
                
        carrinho.adicionarProduto(idProduto)

        montarListaProdutosCarrinho(carrinho.produtos)
    }
}


function montarListaProdutosCarrinho (listaProdutos){
    document.querySelector('.carrinho').innerHTML = ''
        
        listaProdutos.forEach((produto) => {
            const li     = document.createElement('li');
            const img    = document.createElement('img');
            const h3     = document.createElement('h3');
            const p      = document.createElement('p');
            const span   = document.createElement('span');
            const button = document.createElement('button')
            
            img.src          = produto.img;
            img.alt          = produto.nome;
            h3.innerText     = produto.nome;
            p.innerText      = `R$ ${produto.preco.replace(".",",")}`;
            span.innerText   = produto.secao;
            button.id        = produto.id
            
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span);
            document.querySelector('.carrinho').appendChild(li)
        });
        somaProdutos(carrinho.produtos)
}

const carrinho = {
    produtos: [],
    preçoTotal: 0,
    
    adicionarProduto(idProduto){
        const produto = produtos.find((produto) => produto.id == idProduto)
        this.produtos.push(produto)
        console.log(this.produtos)
    }
}

function somaProdutos(listaProdutos){
    let soma = document.getElementById('#precoTotal')
    listaProdutos.forEach((element)=>{
        soma = soma + parseInt(element.preco)
        return soma
    })
    document.querySelector('#precoTotal').innerText = soma
}