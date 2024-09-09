import app from "./index"

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) return console.log("Erro ao ligar o servidor")
    console.log(`Servidor rodando em http://localhots:${PORT}`)
})