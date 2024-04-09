const express = require('express')
const authController = require('../controllers/authController')
const Router = express.Router()

Router.get('/register', authController.register)
Router.get('/login', authController.login)

module.exports = Router