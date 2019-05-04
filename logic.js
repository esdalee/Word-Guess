
// 1.0 List of words to guess
var gameWords = ["ironman", "captainamerica", "thor", "thehulk", "blackwidow", "hawkeye"];

// 1.1 Picks random word from gamewords
function randomWord(gameWords) {
    var randomizedWord = gameWords[Math.floor(Math.random() * array.length - 1)];
    return randomizedWord;
}

// 1.2 Takes in word and letter, checks if letter is in the word
function isCorrectGuess(randomizedWord, guessedLetter) {

    for (var i = 0; i < randomWord.length; i++) {
        if(randomizedWord[i] === guessedLetter) {
            return true;
        }
        else {
            return false;
        }
    }
}
// 1.3 Generate same amount of blanks as word
function getBlanks(randomizedWord) {
    var blanks = [];
    for (var i=0; i<randomizedWord.length; i++) {
        blanks.push("_");
    }
    return blanks;
}

// 1.4 Fill a blanks array with guessed letter
function fillBlanks(randomizedWord, currentPuzzle, guessedLetter) {
    for (var i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i] === guessedLetter) {
            currentPuzzle[i] = guessedLetter;
        }
        return currentPuzzle;
    }
}

