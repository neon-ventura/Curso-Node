const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

const file = path.join(__dirname, 'views')

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

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
    res.render('dashboard')
})

app.listen(3000)
console.log(file)