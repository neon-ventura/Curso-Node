const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const users = require('./users')
const file = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${file}/index.html`)
})

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})