let userGuessValue = null;
let computerGuessValue = null;

function userGuess(value) {
    userGuessValue = value;
    document.getElementById('user-guess').innerHTML = value;
}

function checkGuess() {
    if (userGuessValue === null) {
        alert('Please make a guess!');
        return;
    }
    computerGuessValue = Math.floor(Math.random() * 10);
    document.getElementById('computer-guess').innerHTML = computerGuessValue;
    alert(`Computer guessed: ${computerGuessValue}`);

    if (userGuessValue === computerGuessValue) {
        document.getElementById('result')
        alert('Congratulations You won!');
    } else {
        document.getElementById('result')
        alert('Try again, You lost!');
    }
    userGuessValue = null; // resets game
}