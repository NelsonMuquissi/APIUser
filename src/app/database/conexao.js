import mysql from 'mysql2'


const conexao = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'user',
    port: 3306

})

conexao.connect((error) => {
    if(error) return console.logI({'mensagem': 'Falha ao conectar - se com o banco'})
    console.log('Conectado com sucesso')
})

export const consulta = (sql, valores = '', mensagem) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resposta) => {
            if(erro) return reject(mensagem)
            const row = JSON.parse(JSON.stringify(resposta))
            resolve(row)
        })
    })
}

export default conexao