module.exports = class authController {
    static register(req, res) {
        res.render('auth/register')
    }

    static login(req, res) {
        res.render('auth/login')
    }
}