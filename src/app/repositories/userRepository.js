// import conexao from '../database/conexao.js'
import conexao ,{ consulta } from '../database/conexao.js'

class UserRepository{

    index(){
        const sql = "SELECT *from usernew"
        return consulta(sql, 'Registros não foram encontrados')
    }

    findByID(id){
        const sql = "SELECT *FROM usernew WHERE id=?"
        console.log(id)
        return consulta(sql, id, 'Não foi possível encontrar um usuario com este identificador')

    }

    store(usuario){
        const sql = "INSERT INTO usernew SET ?"
        return consulta(sql, usuario, "Não foi possível realizar este cadastro")
    }

    delete(id){
        const sql = "DELETE FROM usernew WHERE id=?"
        return consulta(sql, id, "Não foi possível eliminar o registro")
    }

    update(usuario, id){
        const sql = "UPDATE usernew SET ? WHERE id=?"
        return consulta(sql,[usuario,id], "Não foi possível atualizar")
    }

}

export default new UserRepository()