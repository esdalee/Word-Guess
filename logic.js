
// Logic Pt 1 - Utility Functions

// 1.0 List of words to guess
var gameWords = ["ironman", "captainamerica", "thor", "thehulk", "blackwidow", "hawkeye", "captainmarvel", "tesseract", "nickfury", "blackpanther","antman", "spiderman", "groot", "starlord", "thanos", "gamora", "rocket", "agentcoulson", "agentcarter", "nebula", "okoye", "shuri", "vision", "scarletwitch", "loki"];

// 1.1 Picks random word from gamewords
function randomWord(gameWords) {
    var randomizedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    return randomizedWord;
}

// 1.2 Takes in word and letter, checks if letter is in the word
function isCorrectGuess(randomizedWord, guessedLetter) {

    for (var i = 0; i < randomizedWord.length; i++) {
        if(randomizedWord[i] === guessedLetter) {
            return true;
        }    
    }
    return false;
}

// 1.3 Generate same amount of blanks as word
function getBlanks(randomizedWord) {
    var blanks = [];
    for (var i=0; i<randomizedWord.length; i++) {
        blanks[i] = "_";
    }
    return blanks;
}

// 1.4 Fill a blanks array with guessed letter
function fillBlanks(randomizedWord, puzzleState, guessedLetter) {
    for (var i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i] === guessedLetter) {
            puzzleState[i] = guessedLetter;
        }
    }
    return puzzleState;
}

// Logic Pt 2 - Game Mangement Functions

// 1.5 Create "round" object

function setupRound(randomizedWord) {

    var round = {
        word: randomizedWord,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(randomizedWord)
    }

    return round;
}

// 1.6 Update the round
function updateRound(round, guessedLetter) {
    
    if (isCorrectGuess (round.word, guessedLetter) === false) {
        round.guessesLeft--;
        round.wrongGuesses.push(guessedLetter);
    }
    else {
        fillBlanks(round.word, round.puzzleState, guessedLetter);
    }
    return round;
}

// 1.7 Check if round is won
function hasWon(puzzleState) {
    // Round is won if there are no more blanks
    for (var i = 0; i < puzzleState.length; i++) {
        if (puzzleState[i] === "_") {
            return false;
        }
    }
    return true;
}

// 1.8 Check if round is lost
function hasLost (guessesLeft) {
    // Round is lost if number of guesses hits 0
    if (guessesLeft === 0) {
        return true;
    }
    return false;
}

// 1.9 Check if the round is over
function isEndOfRound (round) {
    // New round if user lost
    if (hasLost(round.guessesLeft)) {
        return true;
    }
    // New round if user won
    if (hasWon(round.puzzleState)) {
        return true;
    }
    else {
        return false;
    }
}

// 1.10 Set up game - create "game" object
function setupGame (gameWords, wins, losses) {
    var game = {
        words: gameWords,
        wins: wins,
        losses: losses,
        round: setupRound(randomWord(gameWords)) 
    }
    return game;
}

// 1.11 Start a new round
function startNewRound (game) {
    if (hasWon(game.round.puzzleState) === true) {
        game.wins++;
        alert("GREAT JOB! The word was " + game.round.word + "! Whoohoo!");
    }
    else {
        game.losses++;
        alert("Wrong! The word was " + game.round.word + "! Try again...");
    }
    return game;
}

// 1.12 Setting global variable
var myGame = setupGame(gameWords, 0, 0);


////////////////////////////////////////////

// Part 3 - Connecting web page & functions
document.getElementById("puzzle-state").innerText = myGame.round.puzzleState.join(" ");
document.getElementById("wrong-guesses").innerText = myGame.round.wrongGuesses;
document.getElementById("guesses-left").innerText = myGame.round.guessesLeft;
document.getElementById("win-counter").innerText = myGame.wins;
document.getElementById("loss-counter").innerText = myGame.losses;

// Whne user presses key
document.onkeyup = function(click) {
    guessedLetter = click.key.toLowerCase();
    updateRound(myGame.round, guessedLetter);
    
    // If end of round, start new one
    if (isEndOfRound(myGame.round)) {
        myGame = startNewRound(myGame);
        myGame.round = setupRound(randomWord(gameWords));
    }

    document.getElementById("puzzle-state").innerText = myGame.round.puzzleState.join(" ");

    document.getElementById("wrong-guesses").innerText = myGame.round.wrongGuesses;

    document.getElementById("guesses-left").innerText = myGame.round.guessesLeft;

    document.getElementById("win-counter").innerText = myGame.wins;

    document.getElementById("loss-counter").innerText = myGame.losses;
};