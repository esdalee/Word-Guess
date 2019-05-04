
// List of words to guess
var gameWords = ["ironman", "captainamerica", "thor", "thehulk", "blackwidow"];

// Picks random word from gameWords
function randomWord(array) {

    var randomWord = array[Math.floor(Math.random() * array.length)];
}

function isCorrectGuess("randomWord", guessedLetter) {

    for (var i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === guessedLetter) {
            return true;
        }
        else {
            return false;
        }
    }

function getBlanks(word) {
    
}