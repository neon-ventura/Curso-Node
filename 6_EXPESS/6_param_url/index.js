const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const file = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando pelo usuario: ${id}`)
    res.sendFile(`${file}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${file}/index.html`)
})

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})

