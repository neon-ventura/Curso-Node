const express = require('express')
const router = express.Router()
const path = require('path')

const file = path.join(__dirname, '../templates')

router.get('/form', (req, res) => {
    res.sendFile(`${file}/userform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    res.sendFile(`${file}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando pelo usuario: ${id}`)
    res.sendFile(`${file}/users.html`)
})

module.exports = router