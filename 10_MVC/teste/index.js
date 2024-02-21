//Express
const express = require('express') // Importando Express
const app = express() // Invocando Express
//

const exphbs = require('express-handlebars')

const Task = require('./models/Task')

const conn = require('./db/conn') // importando conexão ( Sequelize )

const tasksRoutes = require('./routes/tasksRoutes')

app.use('/tasks' ,tasksRoutes)


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Conexão
conn.sync()
.then(() => {
    app.listen(3000)
}).catch(err => {
    console.log(err)
})
//