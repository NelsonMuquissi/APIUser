import userRepository from "../repositories/userRepository.js"

class UserController{
    async index(req, res){
        const row = await userRepository.index();
        
        const response = {
            Usuario: row.map(user => {
                return{
                    id_usuario: user.id,
                    nome: user.nome,
                    email: user.email,
                    morada: user.morada
                }
            })
        }

        res.status(200).json(response)
    }

    async show(req,res){
        const id = req.params.id
        const row = await userRepository.findByID(id)

        const response = {
            Usuario:{
                id_usuario: row[0].id,
                nome: row[0].nome,
                email: row[0].email,
                morada: row[0].morada
            }
        }
        console.log(row)
        res.status(201).json(response)

    }

    async create(req,res){
        const usuario = req.body
        const row = await userRepository.store(usuario)

        const response = {
            mensagem: "Cadastrado sucesso",
            Usuario:{
                nome: usuario.nome,
                email: usuario.email,
                morada: usuario.morada
            }
        }

        res.status(200).json(response)
    }

    async update(req,res){
        const id = req.params.id
        const usuario = req.body
        const row = await userRepository.update(usuario,id)

        const response = {
            mensagem: "Registro atualizado com sucesso",
            Usuario:{
                nome:usuario.nome,
                email:usuario.email,
                morada:usuario.morada
            }
        }

        res.status(200).json(response)
    }

    async delete(req, res){
        const id = req.params.id
        const row = await userRepository.delete(id)

        const response = {
            mensagem: "Usuario eliinado com sucesso"
        }

        res.status(200).json(response)
    }

}

export default new UserController()