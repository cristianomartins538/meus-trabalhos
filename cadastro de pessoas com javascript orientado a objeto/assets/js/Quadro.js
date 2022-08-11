import { BancoDeDados } from './dataBases.js'
import {Usuario} from './Usuarios.js'


class Quadro {
    static ulCadastrados  = document.getElementById("lista-de-alunos")
    static emailCadastrados     = []

    static capturarDados(event){
        event.preventDefault()

        const inputs   = event.target
        const dataForm = {}
        
        for(let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                dataForm[name] = value
                if([name] == "email"){
                    if(this.emailCadastrados.find(element=>element == dataForm[name])){
                        return alert('Email já cadastrado')
                    }
                }
                
            }
        }
        this.usuarios = Usuario.cadastrarUsuario(dataForm)
        this.atualizarUl()
        this.verificaEmail()

    }
    
    static verificaEmail(){
        const arrPesquisa = this.usuarios.filter(({email})=>{
            this.emailCadastrados.push(email)
        })

    }
    
    static atualizarUl(){
        this.ulCadastrados.innerHTML=""
        this.usuarios.forEach((usuario)=> {
            const li    = document.createElement("li")
            const Cargo = document.createElement("p")
            const Nome  = document.createElement("p")
            const Email = document.createElement("p")

            Cargo.innerText = usuario.cargo
            Nome.innerText  = usuario.nome
            Email.innerText = usuario.email

            li.appendChild(Cargo)
            li.appendChild(Nome)
            li.appendChild(Email)

            this.ulCadastrados.appendChild(li)
            
        })
        const totalCadastrados = this.usuarios.length
        document.getElementById('total-alunos').innerText = `${totalCadastrados}`
    }

    static pesquisarUsuario(pesquisa){
        
        pesquisa = document.getElementById('cargoOption').value
        
        const ulCadastrados  = document.getElementById("lista-de-alunos");
        const usuarios = []

        BancoDeDados.db.usuarios.filter((element)=>{
            if(element.cargo == pesquisa){
                usuarios.push(element)
            }
        })
        if(usuarios == []){
            usuarios = BancoDeDados.db.usuarios
        }

        ulCadastrados.innerHTML = ''
        usuarios.forEach((usuario)=>{
            const li    = document.createElement("li")
            const Cargo = document.createElement("p")
            const Nome  = document.createElement("p")
            const Email = document.createElement("p")

            Cargo.innerText = usuario.cargo
            Nome.innerText  = usuario.nome
            Email.innerText = usuario.email

            li.appendChild(Cargo)
            li.appendChild(Nome)
            li.appendChild(Email)

            ulCadastrados.appendChild(li)
        })
        
    }
    
}

export{Quadro}