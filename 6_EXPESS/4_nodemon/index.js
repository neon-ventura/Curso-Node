const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const file = path.join(__dirname, 'templates', 'index.html')

app.get('/', (req, res) => {
    res.sendFile(file)
})

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})