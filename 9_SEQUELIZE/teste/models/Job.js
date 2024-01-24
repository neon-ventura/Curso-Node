const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Job = db.define('Job', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    job: {
        type: DataTypes.STRING,
        required: true
    },

    notification: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Job