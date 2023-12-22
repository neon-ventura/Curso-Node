import inquirer from "inquirer";
import chalk from 'chalk'

inquirer.prompt([{
    name: 'p1',
    message: 'Qual é o seu nome?'
},{
    name: 'p2',
    message: 'Qual é a sua idade?'
}])
.then((answer) => {

    if (typeof answer.p1 === 'number') {
        throw new Error(chalk.bgRed('Nome e Idade NÃO VALIDOS!'))
    }

    if (answer.p1 === '' || answer.p2 === '') {
        throw new Error(chalk.bgRed('PREENCHA OS CAMPOS'))
    }

    console.log(chalk.bgYellow.black.bold(`Seu nome é ${answer.p1} e a sua idade é ${answer.p2}`))
}).catch(err => console.log(err))