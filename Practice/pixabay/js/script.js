let background = document.getElementById("dropDown");
let button = document.getElementById("ButtonSet");

/*
button.addEventListener("click", displayBackground);

async function displayBackground()  {
    //alert(background.value);
    let pixabayResponse = await 
    fetch("https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q=" 
        + background.value);
    let pixabayData = await pixabayResponse.json();
    console.log(pixabayData.hits[0].webformatURL);

};
*/






button.addEventListener("click",  displaybackground);

async function displaybackground() {
    let pixabayResponse = await
    fetch ("https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=" + background.value);
    let pixabayData = await pixabayResponse.json();
    console.log(pixabayData);
    let randomIndex = Math.floor(Math.random() * pixabayData.hits.length);

    console.log(pixabayData.hits[randomIndex].pageURL);
    console.log(pixabayData.hits[0].webformatURL);
    document.querySelector("body").style.backgroundImage = `url('${pixabayData.hits[randomIndex].webformatURL}')`;
    ///let randomIndex = Math.floor(Math.random() * 50);
}