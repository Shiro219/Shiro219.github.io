document.querySelector("#btn").addEventListener("click", displayQuote);




function displayQ3Options() {

    let q3Options = ["Font-Color", "color", "Text-Color"];
    q3Options = _.shuffle(q3Options);

    let container = document.querySelector("#q3Options");
    container.innerHTML = "";

    for (let i of q3Options) {
        let inputElement = document.createElement("input");
        let labelElement = document.createElement("label");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        console.log(inputElement);

        ///labelElement.textContent = i;
        ///labelElement.prepend(inputElement);

        labelElement.append(inputElement);
        labelElement.append(document.createTextNode(" " + i));


        ///document.querySelector("#q3Options").append(labelElement);
        ///document.querySelector("#q3Options").append(document.createElement("br"));
        
        container.appendChild(labelElement);
        container.appendChild(document.createElement("br"));

    }
}



displaybackground();
async function displaybackground() {
    let pixabayResponse = await
    fetch ("https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=");
    let pixabayData = await pixabayResponse.json();
    console.log(pixabayData);
    let randomIndex = Math.floor(Math.random() * pixabayData.hits.length);

    console.log(pixabayData.hits[randomIndex].pageURL);
    console.log(pixabayData.hits[0].webformatURL);
    document.querySelector("body").style.backgroundImage = `url('${pixabayData.hits[randomIndex].webformatURL}')`;
}





async function displayQuote() {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("h1").textContent = data.quoteText;
    document.querySelector("h2").textContent = data.firstName + " " + data.lastName;
    document.querySelector("h3").textContent = data.bio;
    document.querySelector("#slot").src = data.picture;



}