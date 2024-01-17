const pool = require('./db/conn')
const express = require('express')
const exphs = require('express-handlebars')
const app = express()



app.use(express.urlencoded({
    extended: true
}))

app.engine('handlebars', exphs.engine())
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(express.static('public'))

app.get('/caes/:id', (req, res) => {
    const sql = 'SELECT idcaes FROM caes'
    pool.query(sql, (err, data) => {
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
    pool.query(sql, (err, data) => {
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

    pool.query(sql, (err) => {
        if (err) {
            console.log(err)
        }
    })

    res.redirect('/caeslist')
})

app.get('/cao/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM caes WHERE idcaes = ${id}`

    pool.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const cao = data[0]
        res.render('cao', { cao })
    })
})

app.get('/editarcao/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM caes WHERE idcaes = ${id}`
    pool.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const cao = data[0]
        res.render('editarcao', { cao })
        console.log(cao)
    })
})

app.post('/editar', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade
    const id = req.body.id
    const sql = `UPDATE caes SET caesname = '${nome}', caesidade = '${idade}' WHERE idcaes = '${id}'`

    pool.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/caeslist')
    })
})

app.post('/deletarcao/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM caes WHERE idcaes = ${id}`

    pool.query(sql, (err) => {
        if (err) {
            console.log(err)
        }
    })

    res.redirect('/caeslist')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)