const express = require('express')
const TasksController = require('../controllers/TasksController')
const LoginController = require('../controllers/LoginController')
const RegisterController = require('../controllers/RegisterController')
const route = express.Router()

route.get('/', TasksController.home)

route.get('/task/:id',TasksController.task)

route.post('/login', LoginController.login)

route.get('/register', RegisterController.registerview)

route.post('/createRegister', RegisterController.register)

module.exports = route