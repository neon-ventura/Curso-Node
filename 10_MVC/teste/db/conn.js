const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvcteste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate
    console.log('Conexão sequelize OK!')
} catch (error) {
    console.log(error)
}

module.exports = sequelize