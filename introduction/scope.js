const num = 2;
function exampleFunction(){
    const lastName = "ugbo";

    if(true){
        let firstName = "chinedu";
        console.log("i print from if block", num);
        console.log("i print from if block", firstName);
        console.log("i print from if block", lastName);
    }
    console.log("I print from function scope", num);
    console.log("I print from function scope", lastName);
}
console.log("I print from outside the function", num);



exampleFunction();

