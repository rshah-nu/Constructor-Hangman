// Inquirer package used for User input
var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "userGuess",
        }
    ])
    .then(function(inquirerResponse){
        console.log(inquirerResponse.userGuess);
    });