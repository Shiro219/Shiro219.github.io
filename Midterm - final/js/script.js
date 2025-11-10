/// list of listeners to added when the DOM is ready

document.querySelector("#like").addEventListener("click", displayLikes);



document.querySelector("#report").addEventListener("click", displayReport);

function displayReport() {
    
    let q3Options = ["Spanish", "French", "English"];
    q3Options = _.shuffle(q3Options);

    let container = document.querySelector("#report");
    container.innerHTML = "";

    for (let i of q3Options) {
        let inputElement = document.createElement("input");
        let labelElement = document.createElement("label");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        console.log(inputElement);

 
        labelElement.append(inputElement);
        labelElement.append(document.createTextNode(" " + i));


        container.appendChild(labelElement);
        container.appendChild(document.createElement("br"));

    }




    let videoElement = document.querySelector("#report");
    videoElement.style.border = "5px solid red";
    alert("The video has been reported. Thank you for your feedback!");
    console.log("The video has been reported. Thank you for your feedback!");

}







displayLikes();


async function displayComments() {
    let comments = document.querySelector("#comments").value;
    let url = "https://csumb.space/api/videoLikes.php?videoId=yT_3I_PCx5Mv4Gx2";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            document.querySelector("#commentsCount").textContent = data.comments;
        }
        catch (parseError) {
            console.log("Parse error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
}

async function displayLikes() {
    let likes = document.querySelector("#like").value;
    let url = "https://csumb.space/api/videoLikes.php?videoId=yT_3I_PCx5Mv4Gx2";
    try {
        let response = await fetch(url);
        try {   
            let data = await response.json();
            console.log(data);
            document.querySelector("#likeCount").textContent = data.likes;
            
        }
        catch (parseError) {
            console.log("Parse error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
}

displayLikes();

document.addEventListener("DOMContentLoaded", () => {
    displayReport();
});





/*

Example YouTube embed code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qeByhTF8WEw?si=yT_3I_PCx5Mv4Gx2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/