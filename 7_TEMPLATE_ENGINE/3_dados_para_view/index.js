const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

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

    res.render('home', {user: user, car: car})
})

app.listen(3000)