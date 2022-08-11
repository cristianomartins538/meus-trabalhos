# Atividade Fazendo Vitrine de Produtos com Flex
 

Nessa atividade vamos desenvolver uma grid de produtos para uma loja virtual.
Para iniciar, faça o clone desse repositório.

Nesse projeto você vai receber toda a estrutura do html já pronta, para que possamos focar apenas no css. Mas claro! Se você preferir você mesmo pode desenvolver sua própria estrutura.

### Layout

<!-- ![Grid de produtos](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/grid1.png) -->

[Ver em tela cheia](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/grid1.png)

### Estrutura de pastas

- README.md
- index.html
- /assets
    - /css
        - style.css
    - /img
        - 132718815_1GG.webp
        - 1818873810_1GG.webp
        - 2407778068_1GG.webp
        - 2638610300_1GG.webp
    - /js
        - script.js


__Vamos lá!!!__

---

### Important

Antes de começar a desenvolver o projeto devemos analisar atentamente nossa estrutura html e o layout esperado Mockup, para que possamos tentar ao máximo prever quais propriedade css vamos utiliza, ok?

__Comece do mobile first__

---

### °1 Passo - montando nossa grid

Para montar nossa li (__li.produto__) que envolve cada produto vamos utilizar as seguintes propriedades:

- Tag de aplicação: __`<li class="produto">`__ deve se aplicar as propriedades na classe do elemento.

```css
background: rgb(255, 255, 255);
width: 296px;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
padding: 15px 15px 65px 15px;
position: relative;
```

---

### °2 Passo - montando tag (span) de desconto

Para montar nossa tag (span.produto_desconto) de desconto vamos utilizar as seguintes propriedades:

- Tag de aplicação: __`<span class="produto_desconto">`__ deve se aplicar as propriedades na classe do elemento.

```css
background-color: #39b701;
color: #fff;
padding: 3px 10px;
border-radius: 5px;
display: inline-block;
float: right;
```

---

### °3 Passo - formatando imagem do produto

Para formatar nossa imagem de produto (__img__) vamos utilizar as seguintes propriedades:

- Tag de aplicação: __`<img src="" alt="">`__ 

```css
display: block;
width: 100%;
height: auto;
```
---

### °4 Passo - Escondendo a tag figcaption

Para esconder a tag figcaption (__figcaption__) vamos utilizar as seguinte propriedade:

- Tag de aplicação: __`<figcaption>`__

```css
display: none;
```
---

### °5 Passo - Formatando nossa tag título

Para formatar a tag (__h2__) do nome do produto vamos utilizar as seguinte propriedade:

- Tag de aplicação: __`<h2>`__

```css
font-size: 16px;
font-weight: 100;
color: #535353;
```

### °6 Passo - Estilizando as estrelas de avaliação

Para estilizar as estrelas de avaliação vamos precisar de um pseudo elemento veja como podemos fazer.

Dentro da div(div.produto_avaliacao) em nosso html, temos algumas tags span que vão simular nossas estrelas de avaliações. Então as propriedades css dessa etapa serão aplicada nesse elemento:

- Tag de aplicação: __`<span>`__

```css
display: inline-block;
position: relative;
width: 0;
height: 0;
border-left: calc(10px/2) solid transparent;
border-right: calc(10px/2) solid transparent;
border-bottom: 10px solid #666666;
top: calc(10px/-6);
```

- __Aplicando estilo no pseudo elemento do nosso span__

- Tag de aplicação: __`span::before`__

```css
position: absolute;
content: '';
width: 0;
height: 0;
border-left: calc(10px/2) solid transparent;
border-right: calc(10px/2) solid transparent;
border-top: 10px solid #666666;
top: calc(10px/3);
left: calc(10px/-2);
```
---

- Quando esse elemento for "ativo", tiver a classe a __ativo__ deve receber a cor amarela para sinalizar a avaliação:

A)

- Tag de aplicação: __`span.ativo`__

```css
border-left: calc(10px/2) solid transparent;
border-right: calc(10px/2) solid transparent;
border-bottom: 10px solid #f2c832;
```

B)

- Tag de aplicação: __`span.ativo::before`__

```css
border-left: calc(10px/2) solid transparent;
border-right: calc(10px/2) solid transparent;
border-top: 10px solid #f2c832;
```
---

### °7 Passo - Formatando preços

Nessa etapa vamos fazer a formatação de preços que estão posicionado dentro da div (div.produto_preco).

- Preço antigo __` <span>R$ 1.699,99</span>`__ 

```css
display: block;
font-weight: bold;
color: #535353;
text-decoration: line-through;
font-size: 13px;
```

- Preço atual __` <strong>R$ 1.649,99</strong>`__ 

```css
font-size: 20px;
margin: 4px 0 6px;
display: block;
```

- Parcelamento __`<p>1x de R$ 1.649,99 sem juros no cartão</p>`__ 

```css
color: #535353;
font-size: 13px;
```

---

### °8 Passo - Estilizando botão de compra

- Botão  __`<button>Comprar</button>`__

```css
display: block;
width: 90%;
height: 40px;
border: none;
background-color: #39b701;
text-transform: uppercase;
color: #fff;
margin: 0 auto;
font-weight: 600;
position: absolute;
bottom: 10px;
cursor: pointer;
```

---

### °9 Passo - Replicando produtos e dando posicionamento com flex

Nessa última etapa, vamos replicar nossos produtos deixando 4 produtos por seção.
Percebemos que talvez os lis(produtos) fiquem um em baixo do outro. Então para alinhar esse produtos um ao lado do outro vamos utilizar a propriedade __flex__ veja!

- Tag de aplicação: __`<ul class="produtos_lista">`__ deve se aplicar as propriedades na classe do elemento.

```css
display: flex;
justify-content: space-between;
```

---

## Desafio 

1. Aplicar mobile first 
2. Aplicar pelo menos 3 hovers diferentes

---
## Publicação

Faça o push do código para o seu repositório GitHub e implemente-o via GitHub pages.
