const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.post('/update', TaskController.updateTask)
router.post('/updatestatus', TaskController.updateStatus)
router.get('/edit/:id', TaskController.editTask)
router.get('/', TaskController.showTasks)

module.exports = router