// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

// Global Variables
let randomNumber = Math.floor(Math.random() * 99 + 1);
let guessCount = 0;
let lossCount = 0;
console.log(randomNumber);

function guess() {
    let userGuess = document.querySelector("#guessBox").value;

    // document.querySelector("#answers").textContent += userGuess + ", ";
    document.querySelector("#answers").textContent += `${userGuess}, `;

    console.log(guessCount);
    console.log(lossCount);
    if (guessCount > 7) {
        console.log("LOSS");
        lossCount += 1;
        document.querySelector("#response").textContent = "You lost.";
        document.querySelector("#response").style.color = "red";
    } else {
        if (userGuess < randomNumber) {
            console.log("Too low");
            guessCount += 1;
            document.querySelector("#response").textContent = "Too low!";
            document.querySelector("#response").style.color = "red";
        } else if (userGuess > randomNumber) {
            console.log("Too high");
            guessCount += 1;
            document.querySelector("#response").textContent = "Too high!";
            document.querySelector("#response").style.color = "red";
        } else {
            console.log("correct");
            document.querySelector("#response").textContent = "Correct! Number of guesses: " + guessCount;
            document.querySelector("#response").style.color = "green";
        }
    }
}