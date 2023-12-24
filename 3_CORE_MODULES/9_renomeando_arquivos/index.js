const fs = require('fs')

fs.rename('neonlindo.txt', 'arquivo.txt', (err) => {
    if (err) {
        console.log(err)
    }
    
    console.log('Arquivo Renomeado')
})