const User = require('../models/User')

module.exports = class UserController {
    static async register (req, res) {
        const { username, password } = req.body

        const newUser = await User.create({ username, password})
        res.redirect('/')
    }
}