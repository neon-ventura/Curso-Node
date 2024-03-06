const User = require('../models/User')

module.exports = class UserController {
    static async registerview (req, res) {
        res.render('register/register')
    }

    static async register (req, res) {
        const { username, password } = req.body

        const userData = {
            username,
            password
        }

        const user = await User.findOne( { where: { username } } )

        if (user) {
            const error = 'Este usuario já existe'
            return res.render('register/register', {error})
        }

        await User.create(userData)
        res.redirect('/')
    }
}