const User = require('../models/User')

module.exports = class UserController {
    static async login(req, res) {
        const { username, password } = req.body

        const user = await User.findOne( { where: {username} } )

        if (!user) {
            const error = 'User not found'
            return res.render('login/home', {error})
        }

        if (password !== user.password) {
            const error = 'Incorrect password'
            return res.render('login/home', {error})
        }

        res.redirect(`task/${user.id}`)
    }
}