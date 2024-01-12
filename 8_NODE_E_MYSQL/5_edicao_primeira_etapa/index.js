const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUE ('${title}','${pageqty}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
        }
        
        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const books = data
        console.log(books)
        res.render('books', {books})
    })
})

app.get('/book/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE idbooks = ${id}`
    
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE idbooks = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        res.render('editbook', { book })
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phpmyadmin'
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')

    app.listen(3000)
})