const express = require('express')
const path = require('path')


const port = 3000
const app = express()

const basePath = path.join(__dirname, 'templates', 'index.html')

app.get('/', (req, res) => {
    res.sendFile(basePath)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

console.log(basePath)