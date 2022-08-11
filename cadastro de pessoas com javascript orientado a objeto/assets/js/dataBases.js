class BancoDeDados {
    static db = {
        usuarios: []
    }

    static getUsuarios(usuario){
        return this.db.usuarios
    }

    static postUsuarios(usuario){

        this.db.usuarios.push(usuario)

    }

}
export {BancoDeDados}