const User = require('../models/User')

module.exports = class UserController {
    static async registerview (req, res) {
        res.render('register/register')
    }

    static async register (req, res) {
        const username = req.body.username
        const password = req.body.password

        const userData = {
            username,
            password
        }

        await User.create(userData)
        res.redirect('/home')
    }
}