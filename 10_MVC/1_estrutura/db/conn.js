const { Sequelize }  = require('sequelize')

const conn = new Sequelize('mvc', 'root', '' ,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn