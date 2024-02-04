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

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.post('/cadastrar', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    await User.create({name, email, password})
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn
.sync()
.then(() => {
    app.listen(3000)
})