const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.use(express.static('public'))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/camisa', (req, res) => {
    res.render('camisa')
})
app.get('/tenis', (req, res) => {
    res.render('tenis')
})
app.get('/meia', (req, res) => {
    res.render('meia')
})

app.get('/', (req, res) => {
    const produtos = [
        {
            tipo: 'Camisa',
            marca: 'Nike',
            link: '/camisa'
        },

        {
            tipo: 'Tênis',
            marca: 'Adidas',
            link: '/tenis'
        },

        {
            tipo: 'Meia',
            marca: 'Lacoste',
            link: '/meia'
        }
    ]
    res.render('home', {produtos})
})

app.listen(3000)