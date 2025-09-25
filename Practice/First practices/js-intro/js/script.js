//Event Listeners
document.querySelector("#dateBtn").addEventListener("click", DisplayDate);
document.querySelector("#timeBtn").addEventListener("click", DisplayTime);



let today = new Date();
let year = today.getFullYear();
console.log(today);
console.dir(year);

//1 solution to make sep true
/*
let month = today.getMonth();
if (month == "8") {
  console.log("September");
} else {
  console.log("Not September");
}
  */
/* Another solution to make sep true
let month = today.getMonth();
if (month === 8) {
  console.log("September");
} else {
  console.log("Not September");
}
 */
let month = getMonthName(today.getMonth());
console.log(month);

function getMonthName(monthIndex) {
  if (monthIndex === 8) {
    return "September";
  } else {
    return "Not September";
  }
}

getMonthName(8);
DisplayDate();
DisplayTime();

function DisplayTime() {
  let timeElement = document.querySelector("time");
  timeElement.textContent = today.toLocaleTimeString();
}

function DisplayDate() {
  let dateElement = document.querySelector("date");
  dateElement.textContent = today.toDateString();
}





