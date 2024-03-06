const Task = require('../models/Tasks')
const User = require('../models/User')

module.exports = class TasksController {
    static home(req, res) {
        res.render('login/home')
    }

    static async task(req, res) {
        const id = req.params.id
        const user = await User.findOne( { where: { id: id } } )
        console.log(user)
        res.render('task', { user })
    }
}