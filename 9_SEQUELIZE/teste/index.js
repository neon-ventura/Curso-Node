const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const User = require('./models/User')
const conn = require('./db/conn')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.static('public'))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.post('/cadastrar', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    await User.create({name, email, password})
    res.redirect('/users')
})

app.get('/users', async (req, res) => {
    const user = await User.findAll({raw: true})
    res.render('users', {user})
})

app.get('/', async (req, res) => {
    res.render('home')
})

conn
.sync()
.then(() => {
    app.listen(3000)
})