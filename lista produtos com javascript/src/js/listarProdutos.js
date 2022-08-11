function montarListaProdutos(listarProdutos){
    document.querySelector('ul').innerHTML = '';

    listarProdutos.forEach(produto => {
        const li     = document.createElement('li');
        const img    = document.createElement('img');
        const h3     = document.createElement('h3');
        const p      = document.createElement('p');
        const span   = document.createElement('span');
        const button = document.createElement('button');

        img.src        = produto.img;
        img.alt        = produto.nome;
        h3.innerText   = produto.nome;
        p.innerText    = produto.preco;
        span.innerText = produto.secao;
        button.id      = produto.id;
        button.innerText = "Adicionar ao Carrinho";
        button.classList.add('botao');

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        produto.componentes.forEach((componente, element)=>{
            const pComponente   = document.createElement('p');
            pComponente.classList.add('listaComponentes');

            pComponente.innerText = `${element +1} ${componente}`;
            li.appendChild(pComponente)
        });
        li.appendChild(button)

        document.querySelector('.vitrinePrincipal').appendChild(li)
    });
}