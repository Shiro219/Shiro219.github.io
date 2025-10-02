// Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#lol").addEventListener("OnClick", displaypassword);

// Functions
async function displayCity(){
    let zipCode = document.querySelector("#zip").value;
    let url ="https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
    let response = await fetch(url);
    try {
    let data = await response.json();
    //console.log(data);
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#lat").textContent = data.latitude;
    document.querySelector("#long").textContent = data.longitude;
    } catch(parseError){
        console.log("Parse error " + parseError);
    }
    } catch(error) {
        console.log("Network error " + error);
    }
}

displayStates()
async function displayStates(){
    let url ="https://csumb.space/api/allStatesAPI.php";
    try {
    let response = await fetch(url);
    try {
    let data = await response.json();
    console.log(data);
    for (let i of data){
    let optionElement = document.createElement("option");
    optionElement.textContent = i.state;
    optionElement.value= i.usps;
    document.querySelector("#state").append(optionElement);
    }
    } catch(parseError){
        console.log("Parse error " + parseError);
    }
    } catch(error) {
        console.log("Network error " + error);
    }
}

async function displaypassword(){


    let sugepassword = document.querySelector("#password").textContent;
    let url ="https://csumb.space/api/cityInfoAPI.php?zip=" + sugepassword;
    try {
    let response = await fetch(url);
    try {
    let data = await response.json();
    console.log(data);

    document
    } catch(parseError){
        console.log("Parse error " + parseError);
    }
    } catch(error) {
        console.log("Network error " + error);
    }
}