const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Adress = require('./models/Adress')

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

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    }else{
        newsletter = false
    }

    await User.create({ name, occupation, newsletter })

    res.redirect('/')
})

app.get('/users/:id', async(req, res) => {
    const id = req.params.id
    const user = await User.findOne({raw: true,  where: {id: id}})
    res.render('userview', {user})
})

app.post('/user/delete/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({where: {id: id}})
    res.redirect('/')
})

app.get('/user/edit/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ include: Adress, where: {id: id}})
    res.render('edituser', { user: user.get({plain: true})})
})

app.post('/user/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation

    const userData = {
        id,
        name,
        occupation
    }

    await User.update(userData, {where: {id : id}})
    res.redirect('/')
})

app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const userDataAddress = {
        UserId,
        street,
        number,
        city
    }

    await Adress.create(userDataAddress)

    res.redirect(`/user/edit/${UserId}`)
})

app.get('/', async (req, res) => {
    const user = await User.findAll({raw:true})
    res.render('home', {user})
})


//.sync({force: true})

conn
.sync()
.then(() => {
    app.listen(3000)
})