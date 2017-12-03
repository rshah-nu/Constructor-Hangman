// Inquirer package used for User input
var inquirer = require('inquirer');
var Word = require("./word.js");
// Instantiate a new Word() Object
var newWord = new Word();
// Array is necessary to store correct guesses
var correctGuesses = [];
// Array stores all currently guessed letters
var allGuesses = [];
// Function prints either underscore or a letter to the terminal, depending on if the user has guessed the correct letters or not.
function printToPage(randomWord) {
    myWord = randomWord.word;
    // Concat array to Str for printing on one line
    var myStr = '';
    console.log(myWord);
    for (var i = 0; i < myWord.length; i++){
        if (correctGuesses.includes(myWord[i])) {
            myStr += (" " + myWord[i] + " ");
        }
        else {
            myStr += (" _ ");
        }
    };
    console.log('\n' + myStr + '\n');
    if (correctGuesses.length == myWord.length) {
        console.log("You're done, yo!");
    }
    else {
        promptUser();
    };
    
};
printToPage(newWord);

function promptUser() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "userGuess",
        }
    ])
    .then(function (inquirerResponse) {
        console.log(inquirerResponse.userGuess);
        if (newWord.word.includes(inquirerResponse.userGuess)) {
            correctGuesses.push(inquirerResponse.userGuess);
            allGuesses.push(inquirerResponse.userGuess);
            printToPage(newWord);
        }
        else {
            allGuesses.push(inquirerResponse.userGuess);
            printToPage(newWord);
        }
    });
};
