document.querySelector("#addQuoteForm").addEventListener("submit", validateQuote)

function validateQuote() {
    let feedback = document.querySelector("#feedback")
    feedback.textContent = ""
    feedback.style.color = "red"
    let quote = document.querySelector("textarea[name=quote]").value
    if (quote.length < 5) {
        // alert("bad")
        feedback.textContent = "Quote needs to be longer than 5 characters"
        event.preventDefault()
    }
}