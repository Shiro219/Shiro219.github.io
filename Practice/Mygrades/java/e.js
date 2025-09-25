document.querySelector("#submitBTS").addEventListener("click", gradeQuiz);

function gradeQuiz() {
    console.log("check")
    let score = 0;
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("input[name=q2]:checked").value;
    let userAnswer3 = document.querySelector("#mathQ").value;
    let userAnswer4 = document.querySelector("#chemElt").value;
    let userAnswer5 = document.querySelector("#dropDown").value;    }
    