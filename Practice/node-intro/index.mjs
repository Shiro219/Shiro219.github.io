import { shuffle } from './shuffle.mjs';

const quotes = (await import("success-motivational-quotes")).default;

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



let shuffleLetters = shuffle(letters);

///console.log(shuffleLetters);
///console.log(shuffledLetters);




///function Declaration
///function displayQuote() {
   /// console.log(quotes.getTodaysQuote());
///}


///function Expression
const displayQuote = () => {
    console.log(quotes.getTodaysQuote());
}


displayQuote();