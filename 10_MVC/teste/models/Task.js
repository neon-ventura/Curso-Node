const conn = require('../db/conn') // Importando conexão Sequelize
const { DataTypes } = require('sequelize') // Importando Método DataTypes do Sequelize


// Criando Tabela Tasks no banco de dados
const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    description: {
        type: DataTypes.STRING,
        required: true,
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true,
    }
})
//

module.exports = Task // exportando Tabela