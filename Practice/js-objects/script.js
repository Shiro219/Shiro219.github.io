//alert("accessing web api data...")

getMovieData();

async function getMovieData() {
    let url = "https://www.omdbapi.com/?apikey=12215ee6&s=superman";
    try {
    let response = await fetch(url);
    try {
        let data = await response.json();
        console.log(data.Search[0].Poster);
        let moviesEl = document.querySelector("#movies");
        let imageEl = document.createElement("img");
        imageEl.src = data.Search[2].Poster;
        imageEl.width = 300;
        let h2El = document.createElement("h2");
        h2El.textContent = data.Search[2].Title;

        moviesEl.append(h2El);
        moviesEl.append(imageEl);

    
    } catch (error) {
        console.log("Error parsing data!" + error)
    }
    } catch(error) {
        console.log("Network Error! " + error)
    }
}




/*const person = {
   firstName: "John",
    lastName: "Doe",
                age: 20,
     eyeColor: "blue",
     siblings: [{firstName: "Jane",
        age: 18,
        eyeColor: brown},
        {firstName: "jim",
            age: 15,
            eyeColor: green
        }
    ]
},
{
   firstName: "Juan",
    lastName: "Lopez",
                age: 20,
     eyeColor: "blue",
     siblings: [{firstName: "Jane",
        age: 18,
        eyeColor: brown},
        {firstName: "jim",
            age: 15,
            eyeColor: green
        }
    ]
}
console.log(person.firstName);
console.log(person.siblings[1].firstName);
console.log(person[1].siblings[0].firstName);



const person = {
   "first-Name": "John",
    lastName: "Doe",
                age: 20,
     eyeColor: "blue"
};
console.log(person["first-Name"]);

*/