const mysql = require('mysql')
const pool  = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'caesdatabase'
})

module.exports = pool