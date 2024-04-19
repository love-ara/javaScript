
/**
 * -nested func
 * -arrow func
 * -func as an args
 * -callBack func
 * -func as a returned obj
 * 
 */
function calc(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}

function functionName(param1, param2){
    result = param1 * param2;
    return result;
    } 
    const read = (param1, param2)=>{
        let result = param2 / param1;
        return result;
    };

    function higherOrderFunction(func){
        console.log("higher function");
        func();
    }

    function lowerOrderFunction() {
        console.log("lower function");
    }

    function higherOrderFunction(lowerFunction){
        console.log("higher function")
        lowerFunction();
    }
    higherOrderFunction(() => {
        console.log("lower function")
    })
 
    function greetings(greet){
        return function person(name){
            return `Hello, ${name}. ${greet}`;
        }
    }


higherOrderFunction(lowerOrderFunction);
console.log(greetings("Good morning!")("John"));
console.log(calc(2)(3));
console.log(functionName(3, 5))
console.log(read(6, 36))










    

