const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

const db = require('./db/conn')
const Task = require('./models/Tasks')
const User = require('./models/User')
const tasksRoutes = require('./routes/routes')

app.use('/', tasksRoutes)

db.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})