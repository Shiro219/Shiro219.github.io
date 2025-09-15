document.querySelector("#ButtonBts").addEventListener("click", guessNumber);
let randomNumber = Math.floor(Math.random() * 99) + 1;
let attempts = 7;




function guessNumber() 
{
    let userGuess = document.querySelector("#Box").value;
            ///alert(userGuess);
    document.querySelector("#Answer").textContent += userGuess;

    if (userGuess < 1 || userGuess > 99) {
    ///document.querySelector("#Answer").textContent += '{userGuess}';
}


    Math.floor(Math.random() * 99) + 1;


/*

function guessNumber() 
{
    let userGuess = document.querySelector("#Box").value;
            ///alert(userGuess);
    document.querySelector("#Answer").textContent += userGuess;
}

*/

/*
function guessNumber() {
    let userGuess = document.querySelector("#Box").value;
            alert(userGuess);
        }
*/

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let attempts = 3;