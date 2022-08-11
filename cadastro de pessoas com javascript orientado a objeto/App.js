import {Quadro} from './assets/js/Quadro.js'


const btnCadastrarUsuario = document.querySelector('form')
btnCadastrarUsuario.addEventListener('submit', Quadro.capturarDados.bind(Quadro))


const btnPesquisarUsuario = document.querySelector('#btn')
btnPesquisarUsuario.addEventListener('click', Quadro.pesquisarUsuario)