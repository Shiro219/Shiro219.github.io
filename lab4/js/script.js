// Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayStates);
document.querySelector("#state").addEventListener("change", displaycounty);
document.querySelector("#county").addEventListener("change", displaycounty);
document.querySelector("#username").addEventListener("input", checkusername);
document.querySelector("#password").addEventListener("input", displaypassword);
document.querySelector("#password").addEventListener("focus", displaypassword);
document.querySelector("#retypepassword").addEventListener("input", displayretypepassword);
document.querySelector("#retypepassword").addEventListener("focus", displayretypepassword);


document.querySelector("#signupForm").addEventListener("submit", validateForm);


displayStates();
displaycounty();

/*

document.querySelector("#SignupForm").addEventListener("submit", function (Event) {
    Event.preventDefault();
    console.log("Form Submitted");
});
*/
// Functions
async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try {


            let data = await response.json();
            //console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#long").textContent = data.longitude;

            if (!data.city) {
                document.querySelector("#city").textContent = "Zip code not found";
                document.querySelector("#lat").textContent = "Zip code not found";
                document.querySelector("#long").textContent = "Zip code not found";
            }
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
}

async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";

    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);


            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;
                document.querySelector("#state").append(optionElement);
            }
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
}


async function displaycounty() {
    let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state=" + state;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            /// Error here - need to clear previous options
            let countySelect = document.querySelector("#county");
            countySelect.innerHTML = ""; // Clear previous options
            for (let i of data) {

                let optionElement = document.createElement("option");
                optionElement.textContent = i.county;
                ///optionElement.value = i.county;
                countySelect.append(optionElement);

                ///document.querySelector("#county").append(optionElement);
            }
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
}

async function checkusername() {
    let username = document.querySelector("#username").value.trim(); /// get username and trim whitespace
    let feedback = document.querySelector("#usernameFeedback"); /// feedback element
    if (username === "") { /// if username is not empty
        feedback.textContent = "";
        return;
    }

    if (username.length < 3) { /// if username is less than 3 characters
        feedback.textContent = "❌ Username must be at least 3 characters";
        feedback.style.color = "red";
        return;
    }

    let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            if (data.available === "false" || data.available === false) {
                feedback.textContent = "❌ Username already taken";
                feedback.style.color = "red";
            } else {
                feedback.textContent = "✅ Username available";
                feedback.style.color = "green";
            }
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }

}


async function displaypassword() {

    let passwordInput = document.querySelector("#password").value.trim(); /// get username and trim whitespace
    let sugepassword = document.querySelector("#sugepassword");
    let passwordFeedback = document.querySelector("#passwordFeedback");





    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            sugepassword.textContent = "Suggested Password: " + data.password;
            sugepassword.style.color = "green";

        }

        catch (parseError) {
            console.log("Parse error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }

    if (passwordInput === "") { /// if username is not empty
        passwordFeedback.textContent = "";
        return;
    }
    if (passwordInput.length < 6) {
        passwordFeedback.textContent = "❌ Password must be at least 6 characters";
        passwordFeedback.style.color = "red";
        return;
    } else {
        passwordFeedback.textContent = "✅ Valid Password";
        passwordFeedback.style.color = "green";

    }

}
function displayretypepassword() {
    let passwordInput = document.querySelector("#password").value.trim();
    let retypepasswordInput = document.querySelector("#retypepassword").value.trim();
    let retypepasswordFeedback = document.querySelector("#retypepasswordFeedback");
    if (retypepasswordInput === "") { /// if username is not empty
        retypepasswordFeedback.textContent = "";
        return;
    }
    if (passwordInput !== retypepasswordInput) {
        retypepasswordFeedback.textContent = "❌ Passwords do not match";
        retypepasswordFeedback.style.color = "red";
        return;
    } else {
        retypepasswordFeedback.textContent = "✅ Passwords match";
        retypepasswordFeedback.style.color = "green";
    }
}



async function validateForm(event) {
    event.preventDefault();
    console.log("Form Submitted");
    let username = document.querySelector("#username").value.trim();
    let password = document.querySelector("#password").value.trim();
    let retypepassword = document.querySelector("#retypepassword").value.trim();
    let result = document.querySelector("#result");
    if (username === "" || password === "" || retypepassword === "") {
        result.textContent = "❌ All fields are required";
        result.style.color = "red";
        return;
    }
    if (username.length < 3) {
        result.textContent = "❌ Username must be at least 3 characters";
        result.style.color = "red";
        return;
    }
    if (password.length < 6) {
        result.textContent = "❌ Password must be at least 6 characters";
        result.style.color = "red";
        return;
    }
    if (password !== retypepassword) {
        result.textContent = "❌ Passwords do not match";
        result.style.color = "red";
        return;
    }
    result.textContent = "✅ Form is valid";
    result.style.color = "green";
    console.log("Form is valid");

    return;
}
