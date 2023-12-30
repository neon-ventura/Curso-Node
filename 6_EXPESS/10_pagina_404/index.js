const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const file = path.join(__dirname, 'templates')



app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// arquivos estaticos

app.use(express.static('public'))

app.get('/user/form', (req, res) => {
    res.sendFile(`${file}/formulario.html`)
})

app.post('/user/form/send', (req, res) => {
    console.log(req.body)
    res.sendFile(`${file}/formulario.html`)
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id 
    res.send(`Procurando user ${id}`)
})


app.get('/', (req, res) => {
    res.sendFile(`${file}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${file}/404.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})