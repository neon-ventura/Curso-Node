const express = require('express')
const TasksController = require('../controllers/TasksController')
const UserController = require('../controllers/UserController')
const route = express.Router()

route.get('/', TasksController.home)

route.get('/task',TasksController.task)

route.post('/register', UserController.register)

module.exports = route