let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gessedNumber = parseInt(userInput.value);
    if (gessedNumber > randomNumber) {
        gameResult.textContent = "To High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gessedNumber < randomNumber) {
        gameResult.textContent = "To Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gessedNumber === randomNumber) {
        gameResult.textContent = "Congratulation! You Got It Right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Invalide User Input Please Try Again!."
        gameResult.style.backgroundColor = "red"
    }

}