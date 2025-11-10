document.querySelector("#rollButton").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", resetGame);
document.querySelector("#diceImage").innerHTML = '<img src="img/dice.png" alt="Dice Image" width="200">';
document.querySelector("#diceImage2").innerHTML = '<img src="img/dice2.jpg" alt="Dice Image" width="200">';



// Global Variables
let randomNumber = Math.floor(Math.random() * 6 + 1);
let playerNumber = 0;
let computerNumber = 0;

console.log(randomNumber);

function diceRoll() {
    document.querySelector("#playerDie").textContent = playerNumber;
    document.querySelector("#computerDie").textContent = computerNumber;
}

function guess() {
    playerNumber = Math.floor(Math.random() * 6 + 1);
    computerNumber = Math.floor(Math.random() * 6 + 1);
    document.querySelector("#answers").textContent += `${playerNumber}, `;
    document.querySelector("#answersComp").textContent += `${computerNumber}, `;

    document.querySelector("#playerDie").textContent = playerNumber;
    console.log(playerNumber);
    document.querySelector("#computerDie").textContent = computerNumber;
    console.log(computerNumber);
    diceRoll();
    if (playerNumber > computerNumber) {
        document.querySelector("#response").textContent = "You win!";
        document.querySelector("#response").style.color = "green";
        diceRoll();


    } else if (playerNumber < computerNumber) {
        document.querySelector("#response").textContent = "Computer wins!";
        document.querySelector("#response").style.color = "red";
    } else {
        document.querySelector("#response").textContent = "It's a tie!";
        document.querySelector("#response").style.color = "blue";
    }
}

function resetGame() {
    document.querySelector("#rollButton").disabled = false;
    document.querySelector("#rollButtonComp").disabled = false;
    randomNumber = Math.floor(Math.random() * 6 + 1);
    playerNumber = 0;
    computerNumber = 0;
    document.querySelector("#playerDie").textContent = "";
    document.querySelector("#computerDie").textContent = "";
    document.querySelector("#response").textContent = "";
    diceRoll();
}

resetGame();