const db = require('../db/conn')
const { DataTypes } = require('sequelize')
const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    }
})

Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought