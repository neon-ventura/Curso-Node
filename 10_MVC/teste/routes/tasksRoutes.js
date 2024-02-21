const TaskController = require('../controllers/TaskController')
const express = require('express')
const router = express.Router()

router.get('/create', TaskController.createTask)
router.get('/', TaskController.showTasks)

module.exports = router