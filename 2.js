let selectNumber = prompt("please enter a number from 1 to 10");
let numberSelected = parseInt(selectNumber)
const randomNumber = Math.floor(Math.random()*10)+1;
if (numberSelected == randomNumber) {
    console.log("Good work");
} else {
    console.log("Not matched");
    
}

