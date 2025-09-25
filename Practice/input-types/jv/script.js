document.querySelector("#textColorBtn").addEventListener("click", changeColor);
document.querySelector("#textSizeBtn").addEventListener("click", changeSize);


function changeColor() {
    ///alert("Changing color!");
    let color = document.querySelector("#textColor").value;
    document.querySelector("body").style.color = color;
}

function changeSize() {
    let size = document.querySelector("#textSize").value;
    if (size > 3){
        size =3;
    }
    document.querySelector("body").style.fontSize = size + "em";
}