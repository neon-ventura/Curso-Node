// externo
const minimist = require('minimist')


// Interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = args['a']
const b = args['b']


soma(a, b)