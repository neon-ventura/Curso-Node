import inquirer from "inquirer"

inquirer.prompt([
{
    name: 'p1',
    message: 'Qual foi a primeira nota?',
},
{
    name: 'p2',
    message: 'Qual foi a segunda nota?',
},
])
.then((answer) => {
    console.log(answer)
})
.catch(err => console.log(err))