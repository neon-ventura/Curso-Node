const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const User = require('./models/User')
const Address = require('./models/Address')
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

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({include: Address, where: {id: id}})
    res.render('usersedit', {user: user.get({plain: true})})
})

app.post('/useredit', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const dataUser = {
        name,
        email,
        password
    }

    await  User.update(dataUser, {where: {id: id}})

    res.redirect('/users')
})

app.post('/user/delete/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({where: {id: id}})
    res.redirect('/users')
})

app.post('/useraddress', async (req, res) => {
    const UserId = req.body.UserId
    const country = req.body.country
    const state = req.body.state
    const city = req.body.city

    const userData = {
        UserId,
        country,
        state,
        city
    }

    await Address.create(userData, {where: {id: UserId}})
    console.log(UserId)
    res.redirect(`/users/edit/${UserId}`)
})

app.post('/deleteaddress', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id
    await Address.destroy({where: {id: id}})
    res.redirect(`/users/edit/${UserId}`)
})

app.get('/', async (req, res) => {
    res.render('home')
})

conn
.sync()
.then(() => {
    app.listen(3000)
})