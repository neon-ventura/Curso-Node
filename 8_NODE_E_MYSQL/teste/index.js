const mysql = require('mysql')
const express = require('express')
const exphs = require('express-handlebars')
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphs.engine())
app.set('view engine', 'handlebars')

app.get('/caes/:id', (req, res) => {
    const sql = 'SELECT idcaes FROM caes'
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
        }

        const idcao = data
        console.log(idcao)
        const id = req.params.id
        res.render('caes', { id , idcao})
    })
})

app.get('/caeslist', (req, res) => {
    const sql = 'SELECT * FROM caes'
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const caes = data
        console.log(caes)
        res.render('caeslist', { caes })
    })
})

app.post('/meuscaes', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    const sql = `INSERT INTO caes (caesname, caesidade) VALUE ('${nome}', '${idade}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
        }
    })

    res.redirect('/caeslist')
})

app.get('/cao/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM caes WHERE idcaes = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const cao = data[0]
        res.render('cao', { cao })
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'caesdatabase'
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }

    app.listen(3000)

    console.log('Conectou ao MySQL')
})