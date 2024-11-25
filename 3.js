const multiplication = (a,b) => {
    return a * b
}

const division = (a,b) => {
    return a/b
}
let input = prompt("please enter 1 for multiplication and 2 for division and then press enter");
let a = prompt("please enter your first number")
let b = prompt("please enter your second number")
let input1 = parseInt(a);
let input2 = parseInt(b);
if (input == "1") {
    console.log(multiplication(input1, input2));
} else if (input == "2") {
    console.log(division(input1,input2));
} else {
    console.log("sorry wrong input");
}