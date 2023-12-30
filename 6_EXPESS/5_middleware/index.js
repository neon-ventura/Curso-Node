const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const file = path.join(__dirname, 'templates', 'index.html')

const checkAuth = (req, res, next) => {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Esta logado, pode continuar')
        next()
    }else{
        console.log('Não esta logado, faça o login para continuar!')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(file)
})

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})