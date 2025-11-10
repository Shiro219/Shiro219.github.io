// Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//displayQ3Options();

function displayQ3Options() {

    let q3Options = ["Spanish", "French", "English"];
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

function gradeQuiz() {

    let count = localStorage.getItem("timesTaken");
    if (count == null) {
        count = 0;
    }
    count++;
    localStorage.setItem("timesTaken", count);
    document.querySelector("#timesTaken").innerHTML = "You have taken this quiz " + count + " times.";


    
    console.log("check")
    let score = 0;
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    // let userAnswer2 = false;
    let userAnswer3 = document.querySelector("#mathQ").value;
    let userAnswer4 = document.querySelector("#chemElt").value;
    let userAnswer5 = document.querySelector("#dropDown").value;

    if (userAnswer1 == "color") {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionOne").style.color = "green";
        document.querySelector("#feedbackIcon").innerHTML = "&#x2705;";
    } else {
        console.log("wrong");
        document.querySelector("#questionOne").style.color = "red";
        document.querySelector("#feedbackIcon").innerHTML = "&#x274C;";
    }

    if (document.querySelector("#q2b").checked) {
        userAnswer2 = true;
        score = score + 20;
        document.querySelector("#questionTwo").style.color = "green";
        console.log("correct")
        document.querySelector("#feedbackIcon2").innerHTML = "&#x2705;";
    }
    if (document.querySelector("#q2a").checked) {
        userAnswer2 = false;
        document.querySelector("#questionTwo").style.color = "red";
        console.log("bad")
        document.querySelector("#feedbackIcon2").innerHTML = "&#x274C;";
    }
    if (document.querySelector("#q2c").checked) {
        userAnswer2 = false;
        document.querySelector("#questionTwo").style.color = "red";
        console.log("bad")
        document.querySelector("#feedbackIcon2").innerHTML = "&#x274C;";
    }

    if (userAnswer3 == 6) {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionThree").style.color = "green";
        document.querySelector("#feedbackIcon3").innerHTML = "&#x2705;";
    } else {
        console.log("wrong");
        document.querySelector("#questionThree").style.color = "red";
        document.querySelector("#feedbackIcon3").innerHTML = "&#x274C;";
    }

    if (userAnswer4 == "helium") {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionFour").style.color = "green";
        document.querySelector("#feedbackIcon4").innerHTML = "&#x2705;";
    } else {
        console.log("wrong");
        document.querySelector("#questionFour").style.color = "red";
        document.querySelector("#feedbackIcon4").innerHTML = "&#x274C;";
    }

    if (userAnswer5 == "blue") {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionFive").style.color = "green";
        document.querySelector("#feedbackIcon5").innerHTML = "&#x2705;";

    } else {
        console.log("wrong");
        document.querySelector("#questionFive").style.color = "red";
        document.querySelector("#feedbackIcon4").innerHTML = "&#x274C;";
    }

    let total = document.createElement("h3");
    total.textContent = score + "/ 100"
    document.querySelector("#score").append(total)
    if (score >= 80) {
        total.style.color = "green";
        document.querySelector("#score").textContent = "Congradulations! You passed the quiz! Your score is: " + score + "/ 100 ";
    } else {
        total.style.color = "red";
    }


    console.log(score);
} 
document.addEventListener("DOMContentLoaded", () => {
    displayQ3Options();
});

/* 5 css properties displayed
*/
