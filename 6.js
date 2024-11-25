let a = prompt("enter a prime number")
let input = parseInt(a);
const chechPrime = ()=>{
    for(i=2; i<input;i++) {
    if (input%i == 0) {
        return"not a prime number";
    }
    return "is prime number"
}
}

console.log(chechPrime());
