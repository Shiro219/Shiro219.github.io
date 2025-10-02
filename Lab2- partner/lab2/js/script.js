// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", resetGame);

// Global Variables
let randomNumber = Math.floor(Math.random() * 99 + 1);
let guessCount = 0;
let lossCount = 0;
let winCount = 0;
console.log(randomNumber);


function Scored() {
    document.querySelector("#winCount").textContent = winCount;
    document.querySelector("#lossCount").textContent = lossCount;
    document.querySelector("#totalGames").textContent = winCount + lossCount;
}

function guess() {
    let userGuess = document.querySelector("#guessBox").value;

    // document.querySelector("#answers").textContent += userGuess + ", ";
    document.querySelector("#answers").textContent += `${userGuess}, `;

    console.log(guessCount);
    console.log(lossCount);
    if (guessCount >= 7) {
        console.log("LOSS");
        lossCount++;
        document.querySelector("#response").textContent = "You lost." + " The number was " + randomNumber + "." + " Total losses: " + lossCount; ".";
        document.querySelector("#response").style.color = "red";
        guessBtn.style.display = "none";
        console.log(randomNumber);
        Scored();
        
        
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
        } else if (userGuess == randomNumber) { 
            guessCount += 1;
            winCount++;
            console.log("correct");
            document.querySelector("#response").textContent = "Correct! Number of guesses: " + guessCount + "." + " Total wins: " + winCount + ".";
            document.querySelector("#response").style.color = "green";
            guessBtn.style.display = "none";
            console.log(randomNumber);
            Scored();
            return;
        } if (userGuess > 99 || userGuess < 1) {
            console.log("invalid");
            document.querySelector("#response").textContent = "Please enter a number between 1 and 99.";
            document.querySelector("#response").style.color = "red";
            return;
            
        }
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 99 + 1);
    guessCount = 0;
    document.querySelector("#answers").textContent = "";
    document.querySelector("#response").textContent = "";
    document.querySelector("#guessBtn").style.display = "inline";
    document.querySelector("#guessBox").value = "";
    guessBtn.style.display = "inline";
    console.log(randomNumber);
}
Scored();