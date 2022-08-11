const Pessoa = class Pessoa {
    constructor({nome, sobrenome, dataNascimento, email, contato, telefone, cargo}){
        this._nome           = nome,
        this._sobrenome      = sobrenome,
        this._dataNascimento = dataNascimento,
        this._email          = email,
        this._contato        = contato,
        this._telefone       = telefone,
        this._cargo          = cargo
    
    }

    get nome(){
        return this._nome
    }

    get sobrenome(){
        return this._sobrenome
    }

    get dataNascimento(){
        return this._dataNascimento
    }

    get email(){
        return this._email
    }

    get contato(){
        return this._contato
    }

    get telefone(){
        return this._telefone
    }

    get cargo(){
        return this._cargo
    }

    set nome(newName){
        if(typeof newName === 'string'){
            this._name = newName
        }
    }

    set sobrenome(newSobrenome){
        if(typeof newSobrenome === 'string'){
            this._sobrenome = newSobrenome
        }
    }

   set dataNascimento(newDataNascimento){
       this._dataNascimento = newDataNascimento
   }

    set email(newEmail){
        this._email = newEmail
    }

    set contato(newContato){
        this._contato = newContato
    }

    set telefone(newTelefone){
        this._telefone = newTelefone
    }

    set cargo(newCargo){
        const tipoCargo = ['Aluno', 'Facilitador', 'Instrutor']
        if(tipoCargo.includes(newCargo)) {
            this._cargo = newCargo
        }
    }
    
}

export{Pessoa}