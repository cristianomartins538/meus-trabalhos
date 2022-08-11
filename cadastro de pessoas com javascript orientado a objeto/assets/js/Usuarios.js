import {Pessoa} from './Pessoa.js'
import { BancoDeDados } from './dataBases.js'

class Usuario {
    static cadastrarUsuario(usuario){

        const novoUsuario = new Pessoa(usuario)
        BancoDeDados.postUsuarios(novoUsuario)

        return BancoDeDados.getUsuarios()

    }
}

export {Usuario}