const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo.txt', 'Oi sou o neon', (err) => {
    setTimeout(() => {
        console.log('Arquivo criado')
    },2000)
})

console.log('fim')