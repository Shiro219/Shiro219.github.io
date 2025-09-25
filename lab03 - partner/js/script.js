// Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//displayQ3Options();

function displayQ3Options() {

    let q3Options = ["font-color", "fontColor", "color", "textColor"];
    q3Options = _.shuffle(q3Options);

    for (let i of q3Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q3";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q3Options").append(labelElement);
    }
}

function gradeQuiz() {
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
    } else {
        console.log("wrong");
        document.querySelector("#questionOne").style.color = "red";
    }

    if (document.querySelector("#q2b").checked) {
        userAnswer2 = true;
        score = score + 20;
        document.querySelector("#questionTwo").style.color = "green";
        console.log("correct")
    }
    if (document.querySelector("#q2a").checked) {
        userAnswer2 = false;
        document.querySelector("#questionTwo").style.color = "red";
        console.log("bad")
    }
    if (document.querySelector("#q2c").checked) {
        userAnswer2 = false;
        document.querySelector("#questionTwo").style.color = "red";
        console.log("bad")
    }

    if (userAnswer3 == 6) {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionThree").style.color = "green";
    } else {
        console.log("wrong");
        document.querySelector("#questionThree").style.color = "red";
    }

    if (userAnswer4 == "helium") {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionFour").style.color = "green";
    } else {
        console.log("wrong");
        document.querySelector("#questionFour").style.color = "red";
    }

    if (userAnswer5 == "blue") {
        console.log("right");
        score = score + 20;
        document.querySelector("#questionFive").style.color = "green";
    } else {
        console.log("wrong");
        document.querySelector("#questionFive").style.color = "red";
    }

    let total = document.createElement("h3");
    total.textContent = score + "/ 100"
    document.querySelector("#score").append(total)

    console.log(score);
}