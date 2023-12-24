const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Olá este é meu primeiro html no node!</h1><p> Testando atualização </p>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})