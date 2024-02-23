const { Sequelize } = require('sequelize')

const conn = new Sequelize('mvcteste', 'root', '', {
    host: true,
    dialect: 'mysql'
})

module.exports = conn