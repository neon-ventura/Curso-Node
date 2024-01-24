const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app = express()

const Job = require('./models/Job')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.post('/users/register', async (req, res) => {
    const name = req.body.name
    const job = req.body.job
    let notification = req.body.notification

    if (notification === 'on') {
        notification = true
    }else{
        notification = false
    }
    
    await Job.create({ name, job, notification})

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3000)
})