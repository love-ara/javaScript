const prompt =  require('prompt-sync')();

let person = {
    firstName: "Ara",
    lastName: "Otenaike",
    age: 22,
    gender: "female"
}

console.log(person);

let array = [];
let arr = new Array(3);

let book = {
    id: 1,
    available:  "true",
    count: 10,
    name: "Simbi goes to school",
    author: "Ara"
}
//console.log(book[id])
console.log(book)

let theNumber = Number(prompt("Enter a number: "))
console.log("The square root of the number is " + theNumber * theNumber)

let anotherNumber = Number(prompt("Pick a number: "))
if(!Number.isNaN(anotherNumber)){
    console.log("The square root of the number is " + anotherNumber * anotherNumber);
}


let left_operand, right_operand, operator, ans;
operator = prompt("Enter your operator: ")
left_operand= (Number(prompt("Enter a number ")));
right_operand= Number(prompt("Enter another number: "));
if(operator == "+ "){
    ans =left_operand + right_operand;
} else if(operator == "-"){
    ans =left_operand - right_operand;
} else if(operator == "*"){
    ans =left_operand * right_operand;
}else if(operator == "/"){
    ans =left_operand / right_operand;
}else(
    ans = NaN
)

console.log(ans);