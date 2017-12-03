var randomWords = require("random-words");

function Word(){
    this.word = randomWords();
    this.wordLength = this.word.length;
};

var myArr = [];

var myWord = new Word();

function printToPage(myWord) {
    
    console.log(myWord.word);
    console.log(myWord.wordLength);
    var myStr = '';
    for (var i = 0; i < myWord.wordLength; i++){
        if (myArr.includes(myWord.word[i])) {
            myStr += " " + myWord.word[i] + " ";
        }
        else {
            myStr += " _ "
        };
    };
    console.log(myStr);

}

printToPage(myWord);

