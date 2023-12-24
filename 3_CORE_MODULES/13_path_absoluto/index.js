const path = require('path')

//path absoluto
console.log(path.resolve('texto.txt'))

//formatar path

const arquivos = 'arquivos'
const nome = 'Neon'
const pdf = 'relatorio.pdf'

const file = path.join('/', arquivos, nome, pdf)

console.log(file)