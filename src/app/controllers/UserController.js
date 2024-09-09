import userRepository from "../repositories/userRepository.js"

class UserController{
    async index(req, res){
        res.send("Home inicial")
    }

    async show(req,res){
        const id = req.params.id
        const row = await userRepository.findByID(id)

    }

    async create(req,res){
        const usuario = req.body
        const row = await userRepository.store(usuario)
    }

    async update(req,res){
        const id = req.params.id
        const row = await userRepository.update(id)
    }

    async delete(req, res){
        const id = req.params.id
        const row = await userRepository.delete(id)
    }

}

export default new UserController()