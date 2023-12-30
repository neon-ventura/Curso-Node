const express = require('express')
const app = express()
const path = require('path')
const port = 5000

const fileBase = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(`${fileBase}/index.html`)
})

app.get('/form', (req, res) => {
    res.sendFile(`${fileBase}/form.html`)
})

app.post('/form/send', (req, res) => {
    console.log(req.body)
    res.sendFile(`${fileBase}/form.html`)
})


app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.send(`Procurando por user ${id}`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${fileBase}/404.html`)
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})