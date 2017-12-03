// NPM package which returns random word when called.
var generateRandomWord = require("random-words");
// Constructor for random word
function Word(){
    this.word = generateRandomWord();
    this.wordLength = this.word.length;
};
// Export the Word constructor
module.exports = Word;