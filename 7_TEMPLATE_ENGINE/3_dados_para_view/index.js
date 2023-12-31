const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Neon',
        surname: 'Ventura'
    }

    res.render('home', {user: user})
})

app.listen(3000)