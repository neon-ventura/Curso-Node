const chalk = require('chalk')

function prova(nota) {
    if (nota >= 5) {
        console.log(chalk.green.bold('APROVADO!'))
    }else{
        console.log(chalk.bgRed.white('REPROVADO!'))
    }
}

prova(0)