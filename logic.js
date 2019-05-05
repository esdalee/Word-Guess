
// Logic Pt 1 - Utility Functions

// 1.0 List of words to guess
var gameWords = ["ironman", "captainamerica", "thor", "thehulk", "blackwidow", "hawkeye", "captainmarvel", "tesseract", "nickfury"];

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

// Logic Pt 2 - Game Mangement Functions

// 1.5 Create "round" object

function setupRound(randomizedWord) {

    var newRound = {
        word: randomizedWord,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(word)
    };

    return newRound;
}

// 1.6 Update the round
function updateRound(newRound, guessedLetter) {
    
    if (isCorrectGuess (newRound.word, guessedLetter) === false) {
        newRound.guessesLeft--;
        newRound.wrongGuesses.push(guessedLetter);
    }
    else {
        fillBlanks(newRound.word, newRound.puzzleState, guessedLetter)
    }
}

// 1.7 Check if round has been won


