const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        required: true
    },

    password: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User