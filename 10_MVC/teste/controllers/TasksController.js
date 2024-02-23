const Task = require('../models/Tasks')

module.exports = class TasksController {
    static home(req, res) {
        res.render('login/home')
    }

    static task(req, res) {
        res.render('task')
    }
}