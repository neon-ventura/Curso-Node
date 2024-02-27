const User = require('../models/User')

module.exports = class UserController {
    static async login(req, res) {
        const { username, password } = req.body;

        try {
            // Consulta o banco de dados para encontrar um usuário com o nome de usuário fornecido
            const user = await User.findAll({ username });

            // Verifica se o usuário foi encontrado e se a senha está correta
            if (!user || user.password !== password) {
                // Se o usuário não foi encontrado ou a senha está incorreta, renderiza a página de login novamente com uma mensagem de erro
                return res.render('login/home', { error: 'Incorrect password try again!' });
            }

            // Se o usuário foi encontrado e a senha está correta, você pode redirecionar para a página de perfil, por exemplo
            res.redirect('/task');
        } catch (error) {
            // Se ocorrer algum erro durante a consulta ao banco de dados, envie uma resposta de erro
            console.error('Erro ao tentar fazer login:', error);
            res.status(500).send('Erro ao tentar fazer login.');
        }
    }
}