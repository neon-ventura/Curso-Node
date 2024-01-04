const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {

    const user = {
        name: 'Neon',
        surname: 'Ventura',
        age: 17
    }

    const car = {
        name: 'Fusca',
        age: 1970
    }

    const auth = true

    res.render('home', {user: user, car: car, auth})
})

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c']
    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 7
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 9
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 2
        }
    ]
    res.render('blog', {posts})
})

app.listen(3000)