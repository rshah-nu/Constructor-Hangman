var randomWords = require("random-words");

function Word(){
    this.word = randomWords();
    this.wordLength = word.length;
    console.log(this.wordLength);
    console.log(this.word);
};

Word();